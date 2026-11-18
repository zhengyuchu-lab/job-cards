import{E as J,x as $,y as Q,z as Z,D as T,B as ee,G as te,H as re,I as B,J as ne,K as I,N as D,O as oe}from"./index-BHwOA3Mb.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=new Map,H={activated:!1,tokenObservers:[]},ie={initialized:!1,enabled:!1};function l(e){return A.get(e)||Object.assign({},H)}function se(e,t){return A.set(e,t),A.get(e)}function w(){return ie}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="https://content-firebaseappcheck.googleapis.com/v1",ae="exchangeRecaptchaEnterpriseToken",ce="exchangeDebugToken",S={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},le=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,r,n,o,i){if(this.operation=t,this.retryPolicy=r,this.getWaitDuration=n,this.lowerBound=o,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=o,o>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new T,this.pending.promise.catch(r=>{}),await de(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new T,this.pending.promise.catch(r=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(r){this.retryPolicy(r)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const r=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),r}}}function de(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},d=new J("appCheck","AppCheck",he);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e=!1){var t;return e?(t=self.grecaptcha)===null||t===void 0?void 0:t.enterprise:self.grecaptcha}function _(e){if(!l(e).activated)throw d.create("use-before-activation",{appName:e.name})}function F(e){const t=Math.round(e/1e3),r=Math.floor(t/(3600*24)),n=Math.floor((t-r*3600*24)/3600),o=Math.floor((t-r*3600*24-n*3600)/60),i=t-r*3600*24-n*3600-o*60;let s="";return r&&(s+=k(r)+"d:"),n&&(s+=k(n)+"h:"),s+=k(o)+"m:"+k(i)+"s",s}function k(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C({url:e,body:t},r){const n={"Content-Type":"application/json"},o=r.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&(n["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(t),headers:n};let s;try{s=await fetch(e,i)}catch(h){throw d.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(s.status!==200)throw d.create("fetch-status-error",{httpStatus:s.status});let u;try{u=await s.json()}catch(h){throw d.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const c=u.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw d.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const a=Number(c[1])*1e3,y=Date.now();return{token:u.token,expireTimeMillis:y+a,issuedAtTimeMillis:y}}function fe(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${K}/projects/${r}/apps/${n}:${ae}?key=${o}`,body:{recaptcha_enterprise_token:t}}}function L(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${K}/projects/${r}/apps/${n}:${ce}?key=${o}`,body:{debug_token:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="firebase-app-check-database",pe=1,p="firebase-app-check-store",z="debug-token";let E=null;function W(){return E||(E=new Promise((e,t)=>{try{const r=indexedDB.open(ge,pe);r.onsuccess=n=>{e(n.target.result)},r.onerror=n=>{var o;t(d.create("storage-open",{originalErrorMessage:(o=n.target.error)===null||o===void 0?void 0:o.message}))},r.onupgradeneeded=n=>{const o=n.target.result;switch(n.oldVersion){case 0:o.createObjectStore(p,{keyPath:"compositeKey"})}}}catch(r){t(d.create("storage-open",{originalErrorMessage:r==null?void 0:r.message}))}}),E)}function ke(e){return j(q(e))}function Ee(e,t){return U(q(e),t)}function Te(e){return U(z,e)}function me(){return j(z)}async function U(e,t){const n=(await W()).transaction(p,"readwrite"),i=n.objectStore(p).put({compositeKey:e,value:t});return new Promise((s,u)=>{i.onsuccess=c=>{s()},n.onerror=c=>{var a;u(d.create("storage-set",{originalErrorMessage:(a=c.target.error)===null||a===void 0?void 0:a.message}))}})}async function j(e){const r=(await W()).transaction(p,"readonly"),o=r.objectStore(p).get(e);return new Promise((i,s)=>{o.onsuccess=u=>{const c=u.target.result;i(c?c.value:void 0)},r.onerror=u=>{var c;s(d.create("storage-get",{originalErrorMessage:(c=u.target.error)===null||c===void 0?void 0:c.message}))}})}function q(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new te("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(e){if(B()){let t;try{t=await ke(e)}catch(r){f.warn(`Failed to read token from IndexedDB. Error: ${r}`)}return t}}function b(e,t){return B()?Ee(e,t).catch(r=>{f.warn(`Failed to write token to IndexedDB. Error: ${r}`)}):Promise.resolve()}async function be(){let e;try{e=await me()}catch{}if(e)return e;{const t=crypto.randomUUID();return Te(t).catch(r=>f.warn(`Failed to persist debug token to IndexedDB. Error: ${r}`)),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(){return w().enabled}async function R(){const e=w();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function ve(){const e=ee(),t=w();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const r=new T;t.token=r,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?r.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):r.resolve(be())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={error:"UNKNOWN_ERROR"};function _e(e){return ne.encodeString(JSON.stringify(e),!1)}async function m(e,t=!1,r=!1){const n=e.app;_(n);const o=l(n);let i=o.token,s;if(i&&!g(i)&&(o.token=void 0,i=void 0),!i){const a=await o.cachedTokenPromise;a&&(g(a)?i=a:await b(n,void 0))}if(!t&&i&&g(i))return{token:i.token};let u=!1;if(P())try{o.exchangeTokenPromise||(o.exchangeTokenPromise=C(L(n,await R()),e.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),u=!0);const a=await o.exchangeTokenPromise;return await b(n,a),o.token=a,{token:a.token}}catch(a){return a.code==="appCheck/throttled"||a.code==="appCheck/initial-throttle"?f.warn(a.message):r&&f.error(a),v(a)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),u=!0),i=await l(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"||a.code==="appCheck/initial-throttle"?f.warn(a.message):r&&f.error(a),s=a}let c;return i?s?g(i)?c={token:i.token,internalError:s}:c=v(s):(c={token:i.token},o.token=i,await b(n,i)):c=v(s),u&&Y(n,c),c}async function Ce(e){const t=e.app;_(t);const{provider:r}=l(t);if(P()){const n=await R(),{token:o}=await C(L(t,n),e.heartbeatServiceProvider);return{token:o}}else{const{token:n}=await r.getToken();return{token:n}}}function G(e,t,r,n){const{app:o}=e,i=l(o),s={next:r,error:n,type:t};if(i.tokenObservers=[...i.tokenObservers,s],i.token&&g(i.token)){const u=i.token;Promise.resolve().then(()=>{r({token:u.token}),N(e)}).catch(()=>{})}i.cachedTokenPromise.then(()=>N(e))}function X(e,t){const r=l(e),n=r.tokenObservers.filter(o=>o.next!==t);n.length===0&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function N(e){const{app:t}=e,r=l(t);let n=r.tokenRefresher;n||(n=Pe(e),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function Pe(e){const{app:t}=e;return new ue(async()=>{const r=l(t);let n;if(r.token?n=await m(e,!0):n=await m(e),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const r=l(t);if(r.token){let n=r.token.issuedAtTimeMillis+(r.token.expireTimeMillis-r.token.issuedAtTimeMillis)*.5+3e5;const o=r.token.expireTimeMillis-300*1e3;return n=Math.min(n,o),Math.max(0,n-Date.now())}else return 0},S.RETRIAL_MIN_WAIT,S.RETRIAL_MAX_WAIT)}function Y(e,t){const r=l(e).tokenObservers;for(const n of r)try{n.type==="EXTERNAL"&&t.error!=null?n.error(t.error):n.next(t)}catch{}}function g(e){return e.expireTimeMillis-Date.now()>0}function v(e){return{token:_e(Ae),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,r){this.app=t,this.heartbeatServiceProvider=r}_delete(){const{tokenObservers:t}=l(this.app);for(const r of t)X(this.app,r.next);return Promise.resolve()}}function ye(e,t){return new Re(e,t)}function Ie(e){return{getToken:t=>m(e,t),getLimitedUseToken:()=>Ce(e),addTokenListener:t=>G(e,"INTERNAL",t),removeTokenListener:t=>X(e.app,t)}}const De="@firebase/app-check",Se="0.10.1",xe="https://www.google.com/recaptcha/enterprise.js";function Ne(e,t){const r=new T,n=l(e);n.reCAPTCHAState={initialized:r};const o=Oe(e),i=x(!0);return i?O(e,t,i,o,r):Be(()=>{const s=x(!0);if(!s)throw new Error("no recaptcha");O(e,t,s,o,r)}),r.promise}function O(e,t,r,n,o){r.ready(()=>{$e(e,t,r,n),o.resolve(r)})}function Oe(e){const t=`fire_app_check_${e.name}`,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function Me(e){_(e);const r=await l(e).reCAPTCHAState.initialized.promise;return new Promise((n,o)=>{const i=l(e).reCAPTCHAState;r.ready(()=>{n(r.execute(i.widgetId,{action:"fire_app_check"}))})})}function $e(e,t,r,n){const o=r.render(n,{sitekey:t,size:"invisible",callback:()=>{l(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{l(e).reCAPTCHAState.succeeded=!1}}),i=l(e);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:o})}function Be(e){const t=document.createElement("script");t.src=xe,t.onload=e,document.head.appendChild(t)}class V{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var t,r,n;Ke(this._throttleData);const o=await Me(this._app).catch(s=>{throw d.create("recaptcha-error")});if(!(!((t=l(this._app).reCAPTCHAState)===null||t===void 0)&&t.succeeded))throw d.create("recaptcha-error");let i;try{i=await C(fe(this._app,o),this._heartbeatServiceProvider)}catch(s){throw!((r=s.code)===null||r===void 0)&&r.includes("fetch-status-error")?(this._throttleData=He(Number((n=s.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),d.create("initial-throttle",{time:F(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):s}return this._throttleData=null,i}initialize(t){this._app=t,this._heartbeatServiceProvider=$(t,"heartbeat"),Ne(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof V?this._siteKey===t._siteKey:!1}}function He(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+le,httpStatus:e};{const r=t?t.backoffCount:0,n=re(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function Ke(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw d.create("throttled",{time:F(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e=Z(),t){e=Q(e);const r=$(e,"app-check");if(w().initialized||ve(),P()&&R().then(o=>console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),r.isInitialized()){const o=r.getImmediate(),i=r.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return o;throw d.create("already-initialized",{appName:e.name})}const n=r.initialize({options:t});return Fe(e,t.provider,t.isTokenAutoRefreshEnabled),l(e).isTokenAutoRefreshEnabled&&G(n,"INTERNAL",()=>{}),n}function Fe(e,t,r=!1){const n=se(e,Object.assign({},H));n.activated=!0,n.provider=t,n.cachedTokenPromise=we(e).then(o=>(o&&g(o)&&(n.token=o,Y(e,{token:o.token})),o)),n.isTokenAutoRefreshEnabled=r&&e.automaticDataCollectionEnabled,!e.automaticDataCollectionEnabled&&r&&f.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(e)}async function je(e,t){const r=await m(e,t);if(r.error)throw r.error;if(r.internalError)throw r.internalError;return{token:r.token}}const Le="app-check",M="app-check-internal";function ze(){I(new D(Le,e=>{const t=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat");return ye(t,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider(M).initialize()})),I(new D(M,e=>{const t=e.getProvider("app-check").getImmediate();return Ie(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),oe(De,Se)}ze();export{V as ReCaptchaEnterpriseProvider,je as getToken,Ue as initializeAppCheck};
