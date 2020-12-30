import{degToRad as P}from"../utils/index.js";import{clamp as m}from"../utils/index.js";import{clone as a}from"../utils/store/index.js";export default{setUIParams(t,o){t.ui=o},setEditParams(t,o){t.editParams=o},setEditParam(t,{name:o,value:h}){let r=a(t.editParams);t.editParams=r;const i=o.split(".");for(let s=0;s<i.length-1;s++)r=r[i[s]];r[i[i.length-1]]=h},historyState(t){t.history.canUndo=t.history.cursor<t.history.stack.length-1,t.history.canRedo=t.history.cursor>0},undo(t){t.history.cursor++,t.editParams=a(t.history.stack[t.history.cursor])},redo(t){t.history.cursor--,t.editParams=a(t.history.stack[t.history.cursor])},saveSnapshot(t,o){t.history.stack.splice(0,t.history.cursor),t.history.cursor=0,t.history.stack.unshift(o)},setImageData(t,o){t.image={width:o.width,height:o.height}},setCropParams(t,o){o={...t.editParams.crop,...o};const{width:h,height:r}=t.image,i=P(o.angle+o.rotate),s=Math.abs(i),n=(Math.cos(s)*h+Math.sin(s)*r)/h,e=(Math.sin(s)*h+Math.cos(s)*r)/r,c=Math.max(o.scale,n,e),d=(c-n)/2,l=(c-e)/2,[y,u]=o.translate,g=[m(y,-d,d),m(u,-l,l)];t.editParams.crop={...o,scale:c,translate:g}}};
