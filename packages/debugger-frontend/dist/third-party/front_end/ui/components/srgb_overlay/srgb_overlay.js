import*as t from"../../../core/common/common.js";import*as e from"../render_coordinator/render_coordinator.js";import*as o from"../../lit-html/lit-html.js";const r=new CSSStyleSheet;r.replaceSync(":host{position:absolute;left:0;top:0;width:100%;height:100%}.gamut-line{stroke:color-mix(in sRGB,var(--ref-palette-neutral100) 50%,transparent);fill:none}.label{position:absolute;bottom:3px;margin-right:5px;color:color-mix(in sRGB,var(--ref-palette-neutral100) 50%,transparent)}\n/*# sourceURL=srgbOverlay.css */\n");const n=e.RenderCoordinator.RenderCoordinator.instance();function s(e){const o=t.Color.hsva2rgba([...e,1]),r=t.ColorConverter.ColorConverter.displayP3ToXyzd50(o[0],o[1],o[2]);return t.ColorConverter.ColorConverter.xyzd50ToSrgb(r[0],r[1],r[2]).every((t=>t+.001>=0&&t-.001<=1))}class l extends HTMLElement{static litTagName=o.literal`devtools-spectrum-srgb-overlay`;#t=this.attachShadow({mode:"open"});constructor(){super(),this.#t.adoptedStyleSheets=[r]}#e({hue:t,width:e,height:o}){if(0===e||0===o)return null;const r=1/window.devicePixelRatio,n=[];let l=0;for(let i=0;i<o;i+=r){const a=1-i/o;for(;l<e;l+=r){if(!s([t,l/e,a])){n.push({x:l,y:i});break}}}if(0===n.length)return null;const i=n[n.length-1];return i.x<e&&n.push({y:i.y,x:e}),n}#o(t,e){let o=1/0,r=null;for(const n of t)Math.abs(e-n.y)<=o&&(o=Math.abs(e-n.y),r=n);return r}render({hue:t,width:e,height:r}){return n.write("Srgb Overlay render",(()=>{const n=this.#e({hue:t,width:e,height:r});if(!n||0===n.length)return;const s=this.#o(n,r-13);s&&o.render(o.html`
          <span class="label" style="right: ${e-s.x}px">sRGB</span>
          <svg>
            <polyline points=${n.map((t=>`${t.x.toFixed(2)},${t.y.toFixed(2)}`)).join(" ")} class="gamut-line" />
          </svg>
        `,this.#t,{host:this})}))}}customElements.define("devtools-spectrum-srgb-overlay",l);var i=Object.freeze({__proto__:null,SrgbOverlay:l});export{i as SrgbOverlay};
