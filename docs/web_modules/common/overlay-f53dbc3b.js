import{A as h}from"./elements-b6bd0067.js";import"./lit-html-4b044af4.js";import"./lit-element-f5003d90.js";import"./index-a39f03fd.js";const c=1e3,d=1e3;class p{constructor(e={}){this.warmUpDelay=c,this.coolDownDelay=d,this.isWarm=!1,this.cooldownTimeout=0,this.timeout=0,Object.assign(this,e)}async openTimer(e){if(this.cancelCooldownTimer(),!this.component||!e.isSameNode(this.component))return this.component&&(this.close(this.component),this.cancelCooldownTimer()),this.component=e,this.isWarm?!1:(this.promise=new Promise(t=>{this.resolve=t,this.timeout=window.setTimeout(()=>{this.resolve&&(this.resolve(!1),this.isWarm=!0)},this.warmUpDelay)}),this.promise);if(this.promise)return this.promise;throw new Error("Inconsistent state")}close(e){this.component&&this.component.isSameNode(e)&&(this.resetCooldownTimer(),this.timeout>0&&(clearTimeout(this.timeout),this.timeout=0),this.resolve&&(this.resolve(!0),delete this.resolve),delete this.promise,delete this.component)}resetCooldownTimer(){this.isWarm&&(this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),this.cooldownTimeout=window.setTimeout(()=>{this.isWarm=!1,delete this.cooldownTimeout},this.coolDownDelay))}cancelCooldownTimer(){this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),delete this.cooldownTimeout}}function u(e){return e.button===0}function m(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}class y{constructor(){this.overlays=[],this.preventMouseRootClose=!1,this.root=document.body,this.handlingResize=!1,this.overlayTimer=new p,this.canTabTrap=!0,this.trappingInited=!1,this.handleMouseCapture=e=>{const t=this.topOverlay;if(!e.target||!t||!t.overlayContent||m(e)||!u(e)){this.preventMouseRootClose=!0;return}if(e.target instanceof Node){const i=e.composedPath();if(i.indexOf(t.overlayContent)>=0){this.preventMouseRootClose=!0;return}this.preventMouseRootClose=!1}},this.handleMouse=()=>{this.preventMouseRootClose||this.closeTopOverlay()},this.handleKeyUp=e=>{if(e.code==="Escape"){const t=this.topOverlay;this.closeTopOverlay(),t&&t.trigger.focus()}},this.handleResize=()=>{if(this.handlingResize)return;this.handlingResize=!0,requestAnimationFrame(async()=>{const e=this.overlays.map(t=>t.updateOverlayPosition());await Promise.all(e),this.handlingResize=!1})},this.addEventListeners()}initTabTrapping(){if(this.document.body.shadowRoot){this.canTabTrap=!1;return}if(this.document.body.attachShadow({mode:"open"}),!this.document.body.shadowRoot)return;const e=this.document.body.shadowRoot;e.innerHTML=`
            <div id="actual"><slot></slot></div>
            <style>
            #actual {
                position: relative;
                height: 100%;
                z-index: 0;
                min-height: 100vh;
            }
            #holder {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                position: fixed;
            }
            #holder[hidden] {
                display: none !important;
            }
            #actual[tabindex="-1"] {
                pointer-events: none;  /* just in case? */
            }
            </style>
            <div id="holder" hidden><slot name="open"></slot></div>
        `,this.tabTrapper=e.querySelector("#actual"),this.overlayHolder=e.querySelector("#holder"),this.tabTrapper.attachShadow({mode:"open"}),this.tabTrapper.shadowRoot&&(this.tabTrapper.shadowRoot.innerHTML="<slot></slot>")}startTabTrapping(){if(this.trappingInited||(this.initTabTrapping(),this.trappingInited=!0),!this.canTabTrap)return;this.tabTrapper.tabIndex=-1,this.overlayHolder.hidden=!1}stopTabTrapping(){if(!this.canTabTrap||!this.trappingInited)return;this.tabTrapper.removeAttribute("tabindex"),this.overlayHolder.hidden=!0}get document(){return this.root.ownerDocument||document}get topOverlay(){return this.overlays.slice(-1)[0]}findOverlayForContent(e){for(const t of this.overlays)if(e.isSameNode(t.overlayContent))return t;return}addEventListeners(){this.document.addEventListener("click",this.handleMouseCapture,!0),this.document.addEventListener("click",this.handleMouse),this.document.addEventListener("keyup",this.handleKeyUp),window.addEventListener("resize",this.handleResize)}isClickOverlayActiveForTrigger(e){return this.overlays.some(t=>e.isSameNode(t.trigger)&&t.interaction==="click")}async openOverlay(e){if(this.findOverlayForContent(e.content))return!1;if(e.interaction==="modal"&&this.startTabTrapping(),e.delayed){const i=this.overlayTimer.openTimer(e.content),o=await i;if(o)return i}if(e.interaction==="click")this.closeAllHoverOverlays();else if(e.interaction==="hover"&&this.isClickOverlayActiveForTrigger(e.trigger))return!0;if(this.overlays.length){const i=this.overlays[this.overlays.length-1];i.obscure()}const t=h.create(e);return document.body.appendChild(t),new Promise(i=>requestAnimationFrame(i)).then(async()=>(this.overlays.push(t),await t.updateComplete,this.addOverlayEventListeners(t),e.receivesFocus==="auto"&&t.focus(),!1))}addOverlayEventListeners(e){e.addEventListener("close",()=>{this.hideAndCloseOverlay(e)});switch(e.interaction){case"replace":this.addReplaceOverlayEventListeners(e);break;case"inline":this.addInlineOverlayEventListeners(e);break}}addReplaceOverlayEventListeners(e){e.addEventListener("keydown",t=>{const{code:i}=t;if(i!=="Tab")return;t.stopPropagation(),this.closeOverlay(e.overlayContent),e.tabbingAway=!0,e.trigger.focus(),e.trigger.dispatchEvent(new KeyboardEvent("keydown",t))})}addInlineOverlayEventListeners(e){e.returnFocusElement||(e.returnFocusElement=document.createElement("span"),e.returnFocusElement.tabIndex=-1,e.trigger.hasAttribute("slot")&&(e.returnFocusElement.slot=e.trigger.slot),e.trigger.insertAdjacentElement("afterend",e.returnFocusElement)),e.trigger.addEventListener("keydown",e.handleInlineTriggerKeydown),e.addEventListener("keydown",t=>{const{code:i,shiftKey:o}=t;if(i!=="Tab")return;if(e.tabbingAway=!0,o&&e.returnFocusElement){e.returnFocusElement.focus();return}t.stopPropagation(),this.closeOverlay(e.overlayContent),e.trigger.focus()})}closeOverlay(e){this.overlayTimer.close(e),requestAnimationFrame(()=>{const t=this.findOverlayForContent(e);this.hideAndCloseOverlay(t)})}closeAllHoverOverlays(){for(const e of this.overlays)e.interaction==="hover"&&this.hideAndCloseOverlay(e,!1)}async hideAndCloseOverlay(e,t){if(e){if(await e.hide(t),e.state!="dispose")return;const i=this.overlays.indexOf(e);if(i>=0&&this.overlays.splice(i,1),this.overlays.length){const o=this.overlays[this.overlays.length-1];o.feature(),o.interaction==="modal"?o.focus():this.stopTabTrapping()}else this.stopTabTrapping(),(e.interaction==="modal"||(e.interaction==="replace"||e.interaction==="inline")&&!e.tabbingAway)&&e.trigger.focus(),e.tabbingAway=!1;e.remove(),e.dispose()}}closeTopOverlay(){return this.hideAndCloseOverlay(this.topOverlay)}}class n{constructor(e,t,i){this.isOpen=!1,this.owner=e,this.overlayElement=i,this.interaction=t}static async open(e,t,i,o){const s=new n(e,t,i);return await s.open(o),()=>{s.close()}}static update(){const e=new CustomEvent("sp-update-overlays",{bubbles:!0,composed:!0,cancelable:!0});document.dispatchEvent(e)}async open({delayed:e,offset:t=0,placement:i="top",receivesFocus:o}){if(this.isOpen)return!0;e===void 0&&(e=this.overlayElement.hasAttribute("delayed"));const s={color:void 0,scale:void 0},a=new CustomEvent("sp-query-theme",{bubbles:!0,composed:!0,detail:s,cancelable:!0});this.owner.dispatchEvent(a);const r={},l=new CustomEvent("sp-overlay-query",{bubbles:!0,composed:!0,detail:r,cancelable:!0});return this.overlayElement.dispatchEvent(l),await n.overlayStack.openOverlay(Object.assign({content:this.overlayElement,contentTip:r.overlayContentTipElement,delayed:e,offset:t,placement:i,trigger:this.owner,interaction:this.interaction,theme:s,receivesFocus:o},r)),this.isOpen=!0,!0}close(){n.overlayStack.closeOverlay(this.overlayElement)}}n.overlayStack=new y;export{n as Overlay};
