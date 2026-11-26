import{WebGLRenderer as ne,Scene as ae,PerspectiveCamera as ie,BufferGeometry as oe,BufferAttribute as g,Sphere as re,Vector3 as C,Vector4 as se,Vector2 as ue,ShaderMaterial as le,NormalBlending as ce,AdditiveBlending as pe,Points as fe,Clock as me}from"./three.module-Cx694BKd.js";const T=8,ve=`
uniform float uMorph, uTime, uSize, uPixel, uDisperse, uMouseOn, uAspect, uSweep, uFill, uFocus, uFocusAmt;
uniform vec2 uMouse;
uniform vec3 uAnchor;
uniform vec3 uPal[6];
uniform vec4 uSpec; // valley A, valley B, anchored shape, sweep shape
uniform int uFillShape, uLast;
attribute vec3 aP0, aP1, aP2, aP3, aP4, aP5, aP6, aP7;
attribute vec4 aK0, aK1, aRnd;
attribute float aAnc;
varying vec3 vCol;
varying float vA, vGlow, vSpark;

vec3 P(int s) {
  if (s == 0) return aP0; if (s == 1) return aP1; if (s == 2) return aP2; if (s == 3) return aP3;
  if (s == 4) return aP4; if (s == 5) return aP5; if (s == 6) return aP6; return aP7;
}
float K(int s) {
  if (s == 0) return aK0.x; if (s == 1) return aK0.y; if (s == 2) return aK0.z; if (s == 3) return aK0.w;
  if (s == 4) return aK1.x; if (s == 5) return aK1.y; if (s == 6) return aK1.z; return aK1.w;
}
vec3 pal(float k) {
  int i = int(k + 0.5);
  if (i == 0) return uPal[0]; if (i == 1) return uPal[1]; if (i == 2) return uPal[2];
  if (i == 3) return uPal[3]; if (i == 4) return uPal[4]; return uPal[5];
}
vec3 at(int s, out float k, out float lift) {
  vec3 p = P(s);
  k = K(s);
  lift = 0.0;
  if (s == int(uSpec.x) || s == int(uSpec.y)) p.z = mod(p.z + uTime * 0.7 + 26.0, 34.0) - 26.0;   // the valley drifts toward you
  if (aAnc > 0.5 && s == int(uSpec.z)) p += uAnchor;
  if (s == int(uSpec.w)) { float d = abs(p.y - uSweep); if (d < 0.11) { lift = 1.0 - d / 0.11; } }   // the scan line
  if (s == uFillShape && k < 0.5 && p.x < uFill) k = 1.0;                                     // the close bar fills
  return p;
}
void main() {
  int i0 = int(floor(uMorph));
  int i1 = i0 + 1; if (i1 > uLast) i1 = uLast;
  float f = uMorph - float(i0);
  float t = smoothstep(0.0, 1.0, clamp((f - aRnd.x * 0.32) / 0.68, 0.0, 1.0));
  float ka, kb, la, lb;
  vec3 a = at(i0, ka, la);
  vec3 b = at(i1, kb, lb);
  vec3 p = mix(a, b, t);
  float mid = sin(t * 3.14159);
  p += mid * (0.35 + aRnd.w * 0.9) * vec3(sin(p.y * 1.3 + aRnd.y * 6.28), cos(p.x * 1.1 + aRnd.z * 6.28), sin(p.x * 0.7 + p.y * 0.9));
  p += 0.022 * vec3(sin(uTime * 0.7 + aRnd.y * 20.0), cos(uTime * 0.6 + aRnd.z * 17.0), sin(uTime * 0.5 + aRnd.x * 13.0));
  p += (normalize(p + vec3(0.001, 0.002, 0.003)) * (0.4 + aRnd.w * 1.6) + vec3(0.0, 0.3 + aRnd.y, 0.0)) * uDisperse;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 ndc = clip.xy / clip.w;
  vec2 d = (ndc - uMouse) * vec2(uAspect, 1.0);
  float dist = length(d);
  float push = exp(-dist * dist * 16.0) * uMouseOn;
  ndc += (d / (dist + 0.0001)) * push * 0.11 * vec2(1.0 / uAspect, 1.0);
  clip.xy = ndc * clip.w;
  gl_Position = clip;
  float depth = max(0.5, -mv.z);
  float near = smoothstep(34.0, 6.0, depth);
  float lift = mix(la, lb, t);
  float vw = (i0 == int(uSpec.x) || i0 == int(uSpec.y) ? 1.0 - t : 0.0) + (i1 == int(uSpec.x) || i1 == int(uSpec.y) ? t : 0.0);
  vCol = mix(pal(ka), pal(kb), t);
  vGlow = push + lift * 1.4;
  vSpark = step(0.986, aRnd.z) * (0.5 + 0.5 * sin(uTime * 4.0 + aRnd.y * 20.0));
  vA = mix(0.32, 1.0, near) * (1.0 - uDisperse * 0.25) * (1.0 + vw * 0.35);
  float kc = t < 0.5 ? ka : kb;
  if (uFocus > -0.5 && abs(kc - uFocus) > 0.5) vA *= 1.0 - 0.82 * uFocusAmt;
  if (uFocus > -0.5 && abs(kc - uFocus) <= 0.5) vGlow += 0.35 * uFocusAmt;
  gl_PointSize = uSize * uPixel * (0.55 + aRnd.z * 0.8) * (1.0 + vGlow * 0.6) * (10.0 / depth) * mix(0.45, 1.0, near) * (1.0 + vw * 0.9);
}`,he=`
uniform float uAlpha;
varying vec3 vCol;
varying float vA, vGlow, vSpark;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  if (r > 0.5) discard;
  float a = pow(1.0 - r * 2.0, 1.7);
  vec3 col = vCol * (1.0 + vGlow * 0.7 + vSpark * 0.8);
  gl_FragColor = vec4(col, a * vA * uAlpha);
}`;function Z(n){let o=n>>>0;return()=>{o=o+1831565813>>>0;let a=o;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function we(n,o){const{shapes:a,palette:l,valley:s=[-1,-1],anchorShape:u=-1,sweepShape:c=-1,fillShape:m=-1,size:x=2.4,alpha:A=.6,bg:r=0,gaze:b=!0,light:y=!1,transparent:G=!1}=o,j=window.innerWidth<760,d=o.count||(j?8e3:22e3);let M;try{M=new ne({canvas:n,antialias:!1,alpha:G,powerPreference:"high-performance"})}catch{return null}const O=Math.min(window.devicePixelRatio||1,1.75);M.setPixelRatio(O),M.setClearColor(r,G?0:1);const L=new ae,v=new ie(30,1,.1,200);v.position.set(0,0,10);const h=new oe,k=Math.min(T,a.length),F=Array.from({length:T},()=>new Float32Array(d*3)),B=new Float32Array(d*4),D=new Float32Array(d*4),W=new Float32Array(d*4),q=new Float32Array(d),ee=Z(7);for(let e=0;e<d;e++)for(let i=0;i<4;i++)W[e*4+i]=ee();for(let e=0;e<T;e++){const i=a[Math.min(e,k-1)],z=Z(101+e*977);for(let w=0;w<d;w++){const[P,S,K,R=0,te=0]=i(w,d,z);F[e].set([P,S,K],w*3),(e<4?B:D)[w*4+e%4]=R,te&&e===u&&(q[w]=1)}}h.setAttribute("position",new g(F[0],3)),F.forEach((e,i)=>h.setAttribute(`aP${i}`,new g(e,3))),h.setAttribute("aK0",new g(B,4)),h.setAttribute("aK1",new g(D,4)),h.setAttribute("aRnd",new g(W,4)),h.setAttribute("aAnc",new g(q,1)),h.boundingSphere=new re(new C,1e4);const p={uMorph:{value:0},uTime:{value:0},uSize:{value:x},uPixel:{value:O},uDisperse:{value:0},uMouseOn:{value:0},uAspect:{value:1},uSweep:{value:9},uFill:{value:-9},uFocus:{value:-1},uFocusAmt:{value:0},uMouse:{value:new ue(9,9)},uAnchor:{value:new C},uPal:{value:l.map(e=>new C(...e))},uSpec:{value:new se(s[0],s[1],u,c)},uFillShape:{value:m},uLast:{value:k-1},uAlpha:{value:A}},E=new le({uniforms:p,vertexShader:ve,fragmentShader:he,transparent:!0,depthWrite:!1,depthTest:!1,blending:y?ce:pe}),I=new fe(h,E);I.frustumCulled=!1,L.add(I);const f={morph:0,disperse:0,anchor:[0,0,0],sweep:9,fill:-9,focus:-1},t={morph:0,disperse:0,mx:9,my:9,gx:0,gy:0,on:0,fill:-9,focusAmt:0,focus:-1};let V=0;const X=e=>{const i=n.getBoundingClientRect();e.clientX<i.left||e.clientX>i.right||e.clientY<i.top||e.clientY>i.bottom||(t.mx=(e.clientX-i.left)/i.width*2-1,t.my=-((e.clientY-i.top)/i.height*2-1),V=performance.now())};let _=!0;const Y=new IntersectionObserver(e=>{_=e[0].isIntersecting});Y.observe(n),window.addEventListener("pointermove",X,{passive:!0});const H=()=>{const e=n.clientWidth||window.innerWidth,i=n.clientHeight||window.innerHeight;M.setSize(e,i,!1),v.aspect=e/i,v.updateProjectionMatrix(),p.uAspect.value=e/i};H();const N=new ResizeObserver(H);N.observe(n);const U=new me;let $=0,J=!0;const Q=()=>{if(!J||($=requestAnimationFrame(Q),document.hidden||!_||document.documentElement.dataset.mapOpen))return;const e=Math.min(U.getDelta(),.05),i=U.elapsedTime,z=1-Math.exp(-e*3.4);t.morph+=(f.morph-t.morph)*z,t.disperse+=(f.disperse-t.disperse)*(1-Math.exp(-e*2.2)),t.fill+=(f.fill-t.fill)*(1-Math.exp(-e*2.6));const w=performance.now()-V<1600?1:0;t.on+=(w-t.on)*(1-Math.exp(-e*3)),p.uMorph.value=Math.max(0,Math.min(k-1,t.morph)),p.uTime.value=i,p.uDisperse.value=t.disperse,p.uMouse.value.set(t.mx,t.my),p.uMouseOn.value=t.on,p.uSweep.value=f.sweep,p.uFill.value=t.fill;const P=1-Math.exp(-e*6);f.focus!==t.focus?(t.focusAmt+=(0-t.focusAmt)*P,t.focusAmt<.04&&(t.focus=f.focus)):t.focusAmt+=((t.focus>=0?1:0)-t.focusAmt)*P,p.uFocus.value=t.focus,p.uFocusAmt.value=t.focusAmt,p.uAnchor.value.set(...f.anchor);const S=b&&!f.noGaze,K=S&&t.mx<2?t.mx*-.45:0,R=S&&t.my<2?t.my*.3:0;t.gx+=(K-t.gx)*.05,t.gy+=(R-t.gy)*.05,v.position.set(t.gx,t.gy,10),v.lookAt(0,0,0),M.render(L,v)};return Q(),{set(e){Object.assign(f,e)},jump(e){f.morph=e,t.morph=e},halfWidth(){return Math.tan(v.fov*Math.PI/360)*v.position.z*v.aspect},dispose(){J=!1,cancelAnimationFrame($),window.removeEventListener("pointermove",X),N.disconnect(),Y.disconnect(),h.dispose(),E.dispose(),M.dispose()}}}const xe=n=>{const o=Math.max(1e-6,n()),a=n();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*a)},Ae=(n=[[0,.42],[1,.3],[2,.14],[3,.03],[5,.11]])=>(o,a,l)=>{const s=7.5-32*Math.sqrt(l()),u=.62*(10-s),c=(l()*2-1)*u,m=l()<.14?l()*.5:0,x=-1.55+.7*Math.sin(c*.3+.6)*Math.cos(s*.18)+.3*Math.sin(s*.45+c*.21)+.04*c*c/u+m;let A=l(),r=0;for(const[b,y]of n){if(A<y){r=b;break}A-=y}return[c,x,s,r]},Me=(n,o,a,l,s)=>{const u=o+(n()-.5)*l*.98,c=a+s-l/2*(1-Math.sqrt(Math.max(0,1-((u-o)/(l/2))**2))),m=a+n()*Math.max(.02,c-a);return[u,m,(n()-.5)*.25]};function ge(n){const o=n.length-1;return a=>{const l=Math.min(o-1e-6,Math.max(0,a*o)),s=Math.floor(l),u=l-s,c=n[Math.max(0,s-1)],m=n[s],x=n[s+1],A=n[Math.min(o,s+2)];return[0,1,2].map(r=>.5*(2*m[r]+(-c[r]+x[r])*u+(2*c[r]-5*m[r]+4*x[r]-A[r])*u*u+(-c[r]+3*m[r]-3*x[r]+A[r])*u*u*u))}}export{Me as capsule,we as createField,ge as curve,xe as gauss,Ae as valleyShape};
