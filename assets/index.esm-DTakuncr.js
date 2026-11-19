import{y as le,x as ue,z as pe,Q as fe,R as he,G as ge,T as _e,V as x,K as Ee,N as ve,O as $}from"./index-T2W5kU9w.js";var U="@firebase/ai",M="1.4.1";/**
 * @license
 * Copyright 2024 Google LLC
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
 */const T="AI",B="us-central1",Oe="https://firebasevertexai.googleapis.com",Te="v1beta",F=M,me="gl-js",Ie=180*1e3;/**
 * @license
 * Copyright 2024 Google LLC
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
 */const H=["user","model","function","system"];var j;(function(e){e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(j||(j={}));var V;(function(e){e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE",e.OFF="OFF"})(V||(V={}));var Y;(function(e){e.SEVERITY="SEVERITY",e.PROBABILITY="PROBABILITY"})(Y||(Y={}));var K;(function(e){e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(K||(K={}));var A;(function(e){e.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",e.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",e.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",e.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH",e.HARM_SEVERITY_UNSUPPORTED="HARM_SEVERITY_UNSUPPORTED"})(A||(A={}));var J;(function(e){e.SAFETY="SAFETY",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT"})(J||(J={}));var C;(function(e){e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL"})(C||(C={}));var q;(function(e){e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(q||(q={}));var W;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.VIDEO="VIDEO",e.AUDIO="AUDIO",e.DOCUMENT="DOCUMENT"})(W||(W={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var g;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(g||(g={}));/**
 * @license
 * Copyright 2025 Google LLC
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
 */var X;(function(e){e.BLOCK_LOW_AND_ABOVE="block_low_and_above",e.BLOCK_MEDIUM_AND_ABOVE="block_medium_and_above",e.BLOCK_ONLY_HIGH="block_only_high",e.BLOCK_NONE="block_none"})(X||(X={}));var z;(function(e){e.BLOCK_ALL="dont_allow",e.ALLOW_ADULT="allow_adult",e.ALLOW_ALL="allow_all"})(z||(z={}));var Q;(function(e){e.SQUARE="1:1",e.LANDSCAPE_3x4="3:4",e.PORTRAIT_4x3="4:3",e.LANDSCAPE_16x9="16:9",e.PORTRAIT_9x16="9:16"})(Q||(Q={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const _={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
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
 */class se{constructor(t){this.backendType=t}}class R extends se{constructor(){super(_.GOOGLE_AI)}}class w extends se{constructor(t=B){super(_.VERTEX_AI),t?this.location=t:this.location=B}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class be{constructor(t,n,o,s){this.app=t,this.backend=n;const i=s==null?void 0:s.getImmediate({optional:!0}),r=o==null?void 0:o.getImmediate({optional:!0});this.auth=r||null,this.appCheck=i||null,n instanceof w?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class c extends fe{constructor(t,n,o){const s=T,i=`${s}/${t}`,r=`${s}: ${n} (${i})`;super(t,r),this.code=t,this.customErrorData=o,Error.captureStackTrace&&Error.captureStackTrace(this,c),Object.setPrototypeOf(this,c.prototype),this.toString=()=>r}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ye(e){if(e instanceof R)return`${T}/googleai`;if(e instanceof w)return`${T}/vertexai/${e.location}`;throw new c("error",`Invalid backend: ${JSON.stringify(e.backendType)}`)}function Ae(e){const t=e.split("/");if(t[0]!==T)throw new c("error",`Invalid instance identifier, unknown prefix '${t[0]}'`);switch(t[1]){case"vertexai":const o=t[2];if(!o)throw new c("error",`Invalid instance identifier, unknown location '${e}'`);return new w(o);case"googleai":return new R;default:throw new c("error",`Invalid instance identifier string: '${e}'`)}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class I{constructor(t,n){var o,s,i,r,a,u;if(!((s=(o=t.app)===null||o===void 0?void 0:o.options)===null||s===void 0)&&s.apiKey)if(!((r=(i=t.app)===null||i===void 0?void 0:i.options)===null||r===void 0)&&r.projectId)if(!((u=(a=t.app)===null||a===void 0?void 0:a.options)===null||u===void 0)&&u.appId){if(this._apiSettings={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,location:t.location,backend:t.backend},he(t.app)&&t.app.settings.appCheckToken){const l=t.app.settings.appCheckToken;this._apiSettings.getAppCheckToken=()=>Promise.resolve({token:l})}else t.appCheck&&(this._apiSettings.getAppCheckToken=()=>t.appCheck.getToken());t.auth&&(this._apiSettings.getAuthToken=()=>t.auth.getToken()),this.model=I.normalizeModelName(n,this._apiSettings.backend.backendType)}else throw new c("no-app-id",'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');else throw new c("no-project-id",'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new c("no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.')}static normalizeModelName(t,n){return n===_.GOOGLE_AI?I.normalizeGoogleAIModelName(t):I.normalizeVertexAIModelName(t)}static normalizeGoogleAIModelName(t){return`models/${t}`}static normalizeVertexAIModelName(t){let n;return t.includes("/")?t.startsWith("models/")?n=`publishers/google/${t}`:n=t:n=`publishers/google/models/${t}`,n}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const v=new ge("@firebase/vertexai");/**
 * @license
 * Copyright 2024 Google LLC
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
 */var b;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.PREDICT="predict"})(b||(b={}));class ie{constructor(t,n,o,s,i){this.model=t,this.task=n,this.apiSettings=o,this.stream=s,this.requestOptions=i}toString(){const t=new URL(this.baseUrl);return t.pathname=`/${this.apiVersion}/${this.modelPath}:${this.task}`,t.search=this.queryParams.toString(),t.toString()}get baseUrl(){var t;return((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||Oe}get apiVersion(){return Te}get modelPath(){if(this.apiSettings.backend instanceof R)return`projects/${this.apiSettings.project}/${this.model}`;if(this.apiSettings.backend instanceof w)return`projects/${this.apiSettings.project}/locations/${this.apiSettings.backend.location}/${this.model}`;throw new c("error",`Invalid backend: ${JSON.stringify(this.apiSettings.backend)}`)}get queryParams(){const t=new URLSearchParams;return this.stream&&t.set("alt","sse"),t}}function Ce(){const e=[];return e.push(`${me}/${F}`),e.push(`fire/${F}`),e.join(" ")}async function Se(e){const t=new Headers;if(t.append("Content-Type","application/json"),t.append("x-goog-api-client",Ce()),t.append("x-goog-api-key",e.apiSettings.apiKey),e.apiSettings.automaticDataCollectionEnabled&&t.append("X-Firebase-Appid",e.apiSettings.appId),e.apiSettings.getAppCheckToken){const n=await e.apiSettings.getAppCheckToken();n&&(t.append("X-Firebase-AppCheck",n.token),n.error&&v.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(e.apiSettings.getAuthToken){const n=await e.apiSettings.getAuthToken();n&&t.append("Authorization",`Firebase ${n.accessToken}`)}return t}async function Re(e,t,n,o,s,i){const r=new ie(e,t,n,o,i);return{url:r.toString(),fetchOptions:{method:"POST",headers:await Se(r),body:s}}}async function G(e,t,n,o,s,i){const r=new ie(e,t,n,o,i);let a,u;try{const l=await Re(e,t,n,o,s,i),d=(i==null?void 0:i.timeout)!=null&&i.timeout>=0?i.timeout:Ie,p=new AbortController;if(u=setTimeout(()=>p.abort(),d),l.fetchOptions.signal=p.signal,a=await fetch(l.url,l.fetchOptions),!a.ok){let O="",f;try{const h=await a.json();O=h.error.message,h.error.details&&(O+=` ${JSON.stringify(h.error.details)}`,f=h.error.details)}catch{}throw a.status===403&&f.some(h=>h.reason==="SERVICE_DISABLED")&&f.some(h=>{var N,k;return(k=(N=h.links)===null||N===void 0?void 0:N[0])===null||k===void 0?void 0:k.description.includes("Google developers console API activation")})?new c("api-not-enabled",`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${r.apiSettings.project}/genai/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:a.status,statusText:a.statusText,errorDetails:f}):new c("fetch-error",`Error fetching from ${r}: [${a.status} ${a.statusText}] ${O}`,{status:a.status,statusText:a.statusText,errorDetails:f})}}catch(l){let d=l;throw l.code!=="fetch-error"&&l.code!=="api-not-enabled"&&l instanceof Error&&(d=new c("error",`Error fetching from ${r.toString()}: ${l.message}`),d.stack=l.stack),d}finally{u&&clearTimeout(u)}return a}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function S(e){return e.candidates&&!e.candidates[0].hasOwnProperty("index")&&(e.candidates[0].index=0),we(e)}function we(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&v.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),y(e.candidates[0]))throw new c("response-error",`Response error: ${E(e)}. Response body stored in error.response`,{response:e});return Ne(e)}else if(e.promptFeedback)throw new c("response-error",`Text not available. ${E(e)}`,{response:e});return""},e.inlineDataParts=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&v.warn(`This response had ${e.candidates.length} candidates. Returning data from the first candidate only. Access response.candidates directly to use the other candidates.`),y(e.candidates[0]))throw new c("response-error",`Response error: ${E(e)}. Response body stored in error.response`,{response:e});return Le(e)}else if(e.promptFeedback)throw new c("response-error",`Data not available. ${E(e)}`,{response:e})},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&v.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),y(e.candidates[0]))throw new c("response-error",`Response error: ${E(e)}. Response body stored in error.response`,{response:e});return ke(e)}else if(e.promptFeedback)throw new c("response-error",`Function call not available. ${E(e)}`,{response:e})},e}function Ne(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.text&&i.push(r.text);return i.length>0?i.join(""):""}function ke(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}function Le(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.inlineData&&i.push(r);if(i.length>0)return i}const Me=[C.RECITATION,C.SAFETY];function y(e){return!!e.finishReason&&Me.includes(e.finishReason)}function E(e){var t,n,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];y(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function re(e){var t,n;if((t=e.safetySettings)===null||t===void 0||t.forEach(o=>{if(o.method)throw new c("unsupported","SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),!((n=e.generationConfig)===null||n===void 0)&&n.topK){const o=Math.round(e.generationConfig.topK);o!==e.generationConfig.topK&&(v.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),e.generationConfig.topK=o)}return e}function D(e){return{candidates:e.candidates?Ge(e.candidates):void 0,prompt:e.promptFeedback?De(e.promptFeedback):void 0,usageMetadata:e.usageMetadata}}function Pe(e,t){return{generateContentRequest:Object.assign({model:t},e)}}function Ge(e){const t=[];let n;return t&&e.forEach(o=>{var s;let i;if(o.citationMetadata&&(i={citations:o.citationMetadata.citationSources}),o.safetyRatings&&(n=o.safetyRatings.map(a=>{var u,l,d;return Object.assign(Object.assign({},a),{severity:(u=a.severity)!==null&&u!==void 0?u:A.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(l=a.probabilityScore)!==null&&l!==void 0?l:0,severityScore:(d=a.severityScore)!==null&&d!==void 0?d:0})})),!((s=o.content)===null||s===void 0)&&s.parts.some(a=>a==null?void 0:a.videoMetadata))throw new c("unsupported","Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const r={index:o.index,content:o.content,finishReason:o.finishReason,finishMessage:o.finishMessage,safetyRatings:n,citationMetadata:i,groundingMetadata:o.groundingMetadata};t.push(r)}),t}function De(e){const t=[];return e.safetyRatings.forEach(o=>{var s,i,r;t.push({category:o.category,probability:o.probability,severity:(s=o.severity)!==null&&s!==void 0?s:A.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(i=o.probabilityScore)!==null&&i!==void 0?i:0,severityScore:(r=o.severityScore)!==null&&r!==void 0?r:0,blocked:o.blocked})}),{blockReason:e.blockReason,safetyRatings:t,blockReasonMessage:e.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Z=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function xe(e,t){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),o=Be(n),[s,i]=o.tee();return{stream:Ue(s,t),response:$e(i,t)}}async function $e(e,t){const n=[],o=e.getReader();for(;;){const{done:s,value:i}=await o.read();if(s){let r=Fe(n);return t.backend.backendType===_.GOOGLE_AI&&(r=D(r)),S(r)}n.push(i)}}function Ue(e,t){return _e(this,arguments,function*(){const o=e.getReader();for(;;){const{value:s,done:i}=yield x(o.read());if(i)break;let r;t.backend.backendType===_.GOOGLE_AI?r=S(D(s)):r=S(s),yield yield x(r)}})}function Be(e){const t=e.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return t.read().then(({value:r,done:a})=>{if(a){if(s.trim()){o.error(new c("parse-failed","Failed to parse stream"));return}o.close();return}s+=r;let u=s.match(Z),l;for(;u;){try{l=JSON.parse(u[1])}catch{o.error(new c("parse-failed",`Error parsing JSON response: "${u[1]}`));return}o.enqueue(l),s=s.substring(u[0].length),u=s.match(Z)}return i()})}}})}function Fe(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const o of e)if(o.candidates)for(const s of o.candidates){const i=s.index||0;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:s.index}),n.candidates[i].citationMetadata=s.citationMetadata,n.candidates[i].finishReason=s.finishReason,n.candidates[i].finishMessage=s.finishMessage,n.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[i].content||(n.candidates[i].content={role:s.content.role||"user",parts:[]});const r={};for(const a of s.content.parts){if(a.text!==void 0){if(a.text==="")continue;r.text=a.text}if(a.functionCall&&(r.functionCall=a.functionCall),Object.keys(r).length===0)throw new c("invalid-content","Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");n.candidates[i].content.parts.push(r)}}}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function ae(e,t,n,o){e.backend.backendType===_.GOOGLE_AI&&(n=re(n));const s=await G(t,b.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o);return xe(s,e)}async function ce(e,t,n,o){e.backend.backendType===_.GOOGLE_AI&&(n=re(n));const s=await G(t,b.GENERATE_CONTENT,e,!1,JSON.stringify(n),o),i=await He(s,e);return{response:S(i)}}async function He(e,t){const n=await e.json();return t.backend.backendType===_.GOOGLE_AI?D(n):n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function de(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function P(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return je(t)}function je(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new c("invalid-content","Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!o&&!s)throw new c("invalid-content","No Content is provided for sending chat message.");return o?t:n}function L(e){let t;return e.contents?t=e:t={contents:[P(e)]},e.systemInstruction&&(t.systemInstruction=de(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ee=["text","inlineData","functionCall","functionResponse"],Ve={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"],system:["text"]},te={user:["model"],function:["model"],model:["user","function"],system:[]};function Ye(e){let t=null;for(const n of e){const{role:o,parts:s}=n;if(!t&&o!=="user")throw new c("invalid-content",`First Content should be with role 'user', got ${o}`);if(!H.includes(o))throw new c("invalid-content",`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(H)}`);if(!Array.isArray(s))throw new c("invalid-content","Content should have 'parts' but property with an array of Parts");if(s.length===0)throw new c("invalid-content","Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0};for(const a of s)for(const u of ee)u in a&&(i[u]+=1);const r=Ve[o];for(const a of ee)if(!r.includes(a)&&i[a]>0)throw new c("invalid-content",`Content with role '${o}' can't contain '${a}' part`);if(t&&!te[o].includes(t.role))throw new c("invalid-content",`Content with role '${o}' can't follow '${t.role}'. Valid previous roles: ${JSON.stringify(te)}`);t=n}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ne="SILENT_ERROR";class Ke{constructor(t,n,o,s){this.model=n,this.params=o,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=t,o!=null&&o.history&&(Ye(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var n,o,s,i,r;await this._sendPromise;const a=P(t),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,contents:[...this._history,a]};let l={};return this._sendPromise=this._sendPromise.then(()=>ce(this._apiSettings,this.model,u,this.requestOptions)).then(d=>{var p,O;if(d.response.candidates&&d.response.candidates.length>0){this._history.push(a);const f={parts:((p=d.response.candidates)===null||p===void 0?void 0:p[0].content.parts)||[],role:((O=d.response.candidates)===null||O===void 0?void 0:O[0].content.role)||"model"};this._history.push(f)}else{const f=E(d.response);f&&v.warn(`sendMessage() was unsuccessful. ${f}. Inspect response object for details.`)}l=d}),await this._sendPromise,l}async sendMessageStream(t){var n,o,s,i,r;await this._sendPromise;const a=P(t),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,contents:[...this._history,a]},l=ae(this._apiSettings,this.model,u,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>l).catch(d=>{throw new Error(ne)}).then(d=>d.response).then(d=>{if(d.candidates&&d.candidates.length>0){this._history.push(a);const p=Object.assign({},d.candidates[0].content);p.role||(p.role="model"),this._history.push(p)}else{const p=E(d);p&&v.warn(`sendMessageStream() was unsuccessful. ${p}. Inspect response object for details.`)}}).catch(d=>{d.message!==ne&&v.error(d)}),l}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Je(e,t,n,o){let s="";if(e.backend.backendType===_.GOOGLE_AI){const r=Pe(n,t);s=JSON.stringify(r)}else s=JSON.stringify(n);return(await G(t,b.COUNT_TOKENS,e,!1,s,o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class qe extends I{constructor(t,n,o){super(t,n.model),this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=de(n.systemInstruction),this.requestOptions=o||{}}async generateContent(t){const n=L(t);return ce(this._apiSettings,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}async generateContentStream(t){const n=L(t);return ae(this._apiSettings,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}startChat(t){return new Ke(this._apiSettings,this.model,Object.assign({tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}async countTokens(t){const n=L(t);return Je(this._apiSettings,this.model,n)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class m{constructor(t){for(const n in t)this[n]=t[n];this.type=t.type,this.nullable=t.hasOwnProperty("nullable")?!!t.nullable:!1}toJSON(){const t={type:this.type};for(const n in this)this.hasOwnProperty(n)&&this[n]!==void 0&&(n!=="required"||this.type===g.OBJECT)&&(t[n]=this[n]);return t}static array(t){return new Qe(t,t.items)}static object(t){return new Ze(t,t.properties,t.optionalProperties)}static string(t){return new oe(t)}static enumString(t){return new oe(t,t.enum)}static integer(t){return new We(t)}static number(t){return new Xe(t)}static boolean(t){return new ze(t)}}class We extends m{constructor(t){super(Object.assign({type:g.INTEGER},t))}}class Xe extends m{constructor(t){super(Object.assign({type:g.NUMBER},t))}}class ze extends m{constructor(t){super(Object.assign({type:g.BOOLEAN},t))}}class oe extends m{constructor(t,n){super(Object.assign({type:g.STRING},t)),this.enum=n}toJSON(){const t=super.toJSON();return this.enum&&(t.enum=this.enum),t}}class Qe extends m{constructor(t,n){super(Object.assign({type:g.ARRAY},t)),this.items=n}toJSON(){const t=super.toJSON();return t.items=this.items.toJSON(),t}}class Ze extends m{constructor(t,n,o=[]){super(Object.assign({type:g.OBJECT},t)),this.properties=n,this.optionalProperties=o}toJSON(){const t=super.toJSON();t.properties=Object.assign({},this.properties);const n=[];if(this.optionalProperties){for(const o of this.optionalProperties)if(!this.properties.hasOwnProperty(o))throw new c("invalid-schema",`Property "${o}" specified in "optionalProperties" does not exist.`)}for(const o in this.properties)this.properties.hasOwnProperty(o)&&(t.properties[o]=this.properties[o].toJSON(),this.optionalProperties.includes(o)||n.push(o));return n.length>0&&(t.required=n),delete t.optionalProperties,t}}function nt(e=pe(),t={backend:new R}){e=le(e);const n=ue(e,T),o=ye(t.backend);return n.getImmediate({identifier:o})}function ot(e,t,n){if(!t.model)throw new c("no-model","Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");return new qe(e,t,n)}function et(){Ee(new ve(T,(e,{instanceIdentifier:t})=>{if(!t)throw new c("error","AIService instance identifier is undefined.");const n=Ae(t),o=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new be(o,n,s,i)},"PUBLIC").setMultipleInstances(!0)),$(U,M),$(U,M,"esm2017")}et();export{c as AIError,I as AIModel,Qe as ArraySchema,se as Backend,_ as BackendType,J as BlockReason,ze as BooleanSchema,Ke as ChatSession,C as FinishReason,q as FunctionCallingMode,qe as GenerativeModel,R as GoogleAIBackend,Y as HarmBlockMethod,V as HarmBlockThreshold,j as HarmCategory,K as HarmProbability,A as HarmSeverity,Q as ImagenAspectRatio,z as ImagenPersonFilterLevel,X as ImagenSafetyFilterLevel,We as IntegerSchema,W as Modality,Xe as NumberSchema,Ze as ObjectSchema,H as POSSIBLE_ROLES,m as Schema,g as SchemaType,oe as StringSchema,w as VertexAIBackend,nt as getAI,ot as getGenerativeModel};
