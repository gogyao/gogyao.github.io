import{E as e,M as t,O as n,S as r,c as i,d as a,l as o,u as s}from"./index-v60t_MZS.js";import{$ as c,C as l,Ct as u,E as d,F as f,G as p,H as m,Ht as h,I as g,Kt as _,L as v,Mt as y,N as b,Nt as x,Pt as S,Rt as C,U as w,Ut as T,Wt as ee,Xt as E,Yt as D,Zt as O,a as k,at as A,b as te,d as j,f as M,gt as N,ht as P,i as F,it as I,jt as L,kt as R,m as z,mt as B,o as V,ot as ne,p as re,pt as ie,q as ae,r as H,st as oe,t as se,tn as ce,w as le,x as ue,y as de}from"./Gltf-B-w-q0m-.js";var U=t(n()),fe=t(e()),pe=new E,me=new E,he=new E,ge=new D;function _e(e,t,n){let r=pe.setFromMatrixPosition(e.matrixWorld);r.project(t);let i=n.width/2,a=n.height/2;return[r.x*i+i,-(r.y*a)+a]}function ve(e,t){let n=pe.setFromMatrixPosition(e.matrixWorld),r=me.setFromMatrixPosition(t.matrixWorld),i=n.sub(r),a=t.getWorldDirection(he);return i.angleTo(a)>Math.PI/2}function ye(e,t,n,r){let i=pe.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),ge.set(a.x,a.y),n.setFromCamera(ge,t);let o=n.intersectObjects(r,!0);if(o.length){let e=o[0].distance;return i.distanceTo(n.ray.origin)<e}return!0}function be(e,t){if(t instanceof B)return t.zoom;if(t instanceof N){let n=pe.setFromMatrixPosition(e.matrixWorld),r=me.setFromMatrixPosition(t.matrixWorld),i=t.fov*Math.PI/180,a=n.distanceTo(r);return 1/(2*Math.tan(i/2)*a)}return 1}function xe(e,t,n){if(t instanceof N||t instanceof B){let r=pe.setFromMatrixPosition(e.matrixWorld),i=me.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*a+s)}}var Se=e=>Math.abs(e)<1e-10?0:e;function Ce(e,t,n=``){let r=`matrix3d(`;for(let n=0;n!==16;n++)r+=Se(t[n]*e.elements[n])+(n===15?`)`:`,`);return n+r}var we=(e=>t=>Ce(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Te=(e=>(t,n)=>Ce(t,e(n),`translate(-50%,-50%)`))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function Ee(e){return e&&typeof e==`object`&&`current`in e}var De=U.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:i,center:a,fullscreen:o,portal:s,distanceFactor:c,sprite:l=!1,transform:u=!1,occlude:d,onOcclude:f,castShadow:p,receiveShadow:m,material:h,geometry:g,zIndexRange:_=[16777271,0],calculatePosition:v=_e,as:y=`div`,wrapperClass:b,pointerEvents:x=`auto`,...S},C)=>{let{gl:w,camera:T,scene:ee,size:D,raycaster:O,events:A,viewport:te}=re(),[M]=U.useState(()=>document.createElement(y)),N=U.useRef(null),P=U.useRef(null),F=U.useRef(0),I=U.useRef([0,0]),L=U.useRef(null),R=U.useRef(null),z=s?.current||A.connected||w.domElement.parentNode,B=U.useRef(null),V=U.useRef(!1),ne=U.useMemo(()=>d&&d!==`blending`||Array.isArray(d)&&d.length&&Ee(d[0]),[d]);U.useLayoutEffect(()=>{let e=w.domElement;d&&d===`blending`?(e.style.zIndex=`${Math.floor(_[0]/2)}`,e.style.position=`absolute`,e.style.pointerEvents=`none`):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[d]),U.useLayoutEffect(()=>{if(P.current){let e=N.current=fe.createRoot(M);if(ee.updateMatrixWorld(),u)M.style.cssText=`position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`;else{let e=v(P.current,T,D);M.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return z&&(i?z.prepend(M):z.appendChild(M)),()=>{z&&z.removeChild(M),e.unmount()}}},[z,u]),U.useLayoutEffect(()=>{b&&(M.className=b)},[b]);let ie=U.useMemo(()=>u?{position:`absolute`,top:0,left:0,width:D.width,height:D.height,transformStyle:`preserve-3d`,pointerEvents:`none`}:{position:`absolute`,transform:a?`translate3d(-50%,-50%,0)`:`none`,...o&&{top:-D.height/2,left:-D.width/2,width:D.width,height:D.height},...n},[n,a,o,D,u]),ae=U.useMemo(()=>({position:`absolute`,pointerEvents:x}),[x]);U.useLayoutEffect(()=>{if(V.current=!1,u){var t;(t=N.current)==null||t.render(U.createElement(`div`,{ref:L,style:ie},U.createElement(`div`,{ref:R,style:ae},U.createElement(`div`,{ref:C,className:r,style:n,children:e}))))}else{var i;(i=N.current)==null||i.render(U.createElement(`div`,{ref:C,style:ie,className:r,children:e}))}});let H=U.useRef(!0);j(e=>{if(P.current){T.updateMatrixWorld(),P.current.updateWorldMatrix(!0,!1);let e=u?I.current:v(P.current,T,D);if(u||Math.abs(F.current-T.zoom)>t||Math.abs(I.current[0]-e[0])>t||Math.abs(I.current[1]-e[1])>t){let t=ve(P.current,T),n=!1;ne&&(Array.isArray(d)?n=d.map(e=>e.current):d!==`blending`&&(n=[ee]));let r=H.current;if(n){let e=ye(P.current,T,O,n);H.current=e&&!t}else H.current=!t;r!==H.current&&(f?f(!H.current):M.style.display=H.current?`block`:`none`);let i=Math.floor(_[0]/2),a=d?ne?[_[0],i]:[i-1,0]:_;if(M.style.zIndex=`${xe(P.current,T,a)}`,u){let[e,t]=[D.width/2,D.height/2],n=T.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:i,left:a,bottom:o,right:s}=T,u=we(T.matrixWorldInverse),d=r?`scale(${n})translate(${Se(-(s+a)/2)}px,${Se((i+o)/2)}px)`:`translateZ(${n}px)`,f=P.current.matrixWorld;l&&(f=T.matrixWorldInverse.clone().transpose().copyPosition(f).scale(P.current.scale),f.elements[3]=f.elements[7]=f.elements[11]=0,f.elements[15]=1),M.style.width=D.width+`px`,M.style.height=D.height+`px`,M.style.perspective=r?``:`${n}px`,L.current&&R.current&&(L.current.style.transform=`${d}${u}translate(${e}px,${t}px)`,R.current.style.transform=Te(f,1/((c||10)/400)))}else{let t=c===void 0?1:be(P.current,T)*c;M.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}I.current=e,F.current=T.zoom}}if(!ne&&B.current&&!V.current){if(u){if(L.current){let e=L.current.children[0];if(e!=null&&e.clientWidth&&e!=null&&e.clientHeight){let{isOrthographicCamera:t}=T;if(t||g)S.scale&&(Array.isArray(S.scale)?S.scale instanceof E?B.current.scale.copy(S.scale.clone().divideScalar(1)):B.current.scale.set(1/S.scale[0],1/S.scale[1],1/S.scale[2]):B.current.scale.setScalar(1/S.scale));else{let t=(c||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;B.current.scale.set(n,r,1)}V.current=!0}}}else{let t=M.children[0];if(t!=null&&t.clientWidth&&t!=null&&t.clientHeight){let e=1/te.factor,n=t.clientWidth*e,r=t.clientHeight*e;B.current.scale.set(n,r,1),V.current=!0}B.current.lookAt(e.camera.position)}}});let oe=U.useMemo(()=>({vertexShader:u?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[u]);return U.createElement(`group`,k({},S,{ref:P}),d&&!ne&&U.createElement(`mesh`,{castShadow:p,receiveShadow:m,ref:B},g||U.createElement(`planeGeometry`,null),h||U.createElement(`shaderMaterial`,{side:2,vertexShader:oe.vertexShader,fragmentShader:oe.fragmentShader})))}),Oe=new te,ke=new E,Ae=class extends m{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new v([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new v([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new w(t,6,1);return this.setAttribute(`instanceStart`,new p(n,3,0)),this.setAttribute(`instanceEnd`,new p(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new w(n,t*2,1);return this.setAttribute(`instanceColorStart`,new p(r,t,0)),this.setAttribute(`instanceColorEnd`,new p(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ce(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new te);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Oe.setFromBufferAttribute(t),this.boundingBox.union(Oe))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new C),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)ke.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(ke)),ke.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(ke));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},je=class extends Ae{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},Me=class extends L{constructor(e){super({type:`LineMaterial`,uniforms:_.clone(_.merge([z.common,z.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new D(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${F>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},Ne=new O,Pe=new E,Fe=new E,W=new O,G=new O,K=new O,Ie=new E,Le=new ne,q=new ae,Re=new E,ze=new te,Be=new C,J=new O,Y,Ve;function He(e,t,n){return J.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),J.multiplyScalar(1/J.w),J.x=Ve/n.width,J.y=Ve/n.height,J.applyMatrix4(e.projectionMatrixInverse),J.multiplyScalar(1/J.w),Math.abs(Math.max(J.x,J.y))}function Ue(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){q.start.fromBufferAttribute(i,r),q.end.fromBufferAttribute(a,r),q.applyMatrix4(n);let o=new E,s=new E;Y.distanceSqToSegment(q.start,q.end,s,o),s.distanceTo(o)<Ve*.5&&t.push({point:s,pointOnLine:o,distance:Y.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[H]:null})}}function We(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Y.at(1,K),K.w=1,K.applyMatrix4(t.matrixWorldInverse),K.applyMatrix4(r),K.multiplyScalar(1/K.w),K.x*=i.x/2,K.y*=i.y/2,K.z=0,Ie.copy(K),Le.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(W.fromBufferAttribute(s,t),G.fromBufferAttribute(c,t),W.w=1,G.w=1,W.applyMatrix4(Le),G.applyMatrix4(Le),W.z>u&&G.z>u)continue;if(W.z>u){let e=W.z-G.z,t=(W.z-u)/e;W.lerp(G,t)}else if(G.z>u){let e=G.z-W.z,t=(G.z-u)/e;G.lerp(W,t)}W.applyMatrix4(r),G.applyMatrix4(r),W.multiplyScalar(1/W.w),G.multiplyScalar(1/G.w),W.x*=i.x/2,W.y*=i.y/2,G.x*=i.x/2,G.y*=i.y/2,q.start.copy(W),q.start.z=0,q.end.copy(G),q.end.z=0;let o=q.closestPointToPointParameter(Ie,!0);q.at(o,Re);let l=I.lerp(W.z,G.z,o),d=l>=-1&&l<=1,f=Ie.distanceTo(Re)<Ve*.5;if(d&&f){q.start.fromBufferAttribute(s,t),q.end.fromBufferAttribute(c,t),q.start.applyMatrix4(a),q.end.applyMatrix4(a);let r=new E,i=new E;Y.distanceSqToSegment(q.start,q.end,i,r),n.push({point:i,pointOnLine:r,distance:Y.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[H]:null})}}}var Ge=class extends oe{constructor(e=new Ae,t=new Me({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Pe.fromBufferAttribute(t,e),Fe.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Pe.distanceTo(Fe);let i=new w(r,2,1);return e.setAttribute(`instanceDistanceStart`,new p(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new p(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Y=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Ve=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Be.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Ve*.5:He(r,Math.max(r.near,Be.distanceToPoint(Y.origin)),s.resolution),Be.radius+=c,Y.intersectsSphere(Be)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ze.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Ve*.5:He(r,Math.max(r.near,ze.distanceToPoint(Y.origin)),s.resolution),ze.expandByScalar(l),Y.intersectsBox(ze)!==!1&&(n?Ue(this,t):We(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ne),this.material.uniforms.resolution.value.set(Ne.z,Ne.w))}},Ke=class extends Ge{constructor(e=new je,t=new Me({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},qe=U.forwardRef(function({children:e,follow:t=!0,lockX:n=!1,lockY:r=!1,lockZ:i=!1,...a},o){let s=U.useRef(null),c=U.useRef(null),l=new u;return j(({camera:e})=>{if(!t||!c.current)return;let a=s.current.rotation.clone();c.current.updateMatrix(),c.current.updateWorldMatrix(!1,!1),c.current.getWorldQuaternion(l),e.getWorldQuaternion(s.current.quaternion).premultiply(l.invert()),n&&(s.current.rotation.x=a.x),r&&(s.current.rotation.y=a.y),i&&(s.current.rotation.z=a.z)}),U.useImperativeHandle(o,()=>c.current,[]),U.createElement(`group`,k({ref:c},a),U.createElement(`group`,{ref:s},e))}),Je=U.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:a,dashed:o,...s},c){var l;let u=re(e=>e.size),f=U.useMemo(()=>a?new Ge:new Ke,[a]),[p]=U.useState(()=>new Me),m=(n==null||(l=n[0])==null?void 0:l.length)===4?4:3,h=U.useMemo(()=>{let r=a?new Ae:new je,i=e.map(e=>{let t=Array.isArray(e);return e instanceof E||e instanceof O?[e.x,e.y,e.z]:e instanceof D?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof d?e.toArray():e);r.setColors(e.flat(),m)}return r},[e,a,n,m]);return U.useLayoutEffect(()=>{f.computeLineDistances()},[e,f]),U.useLayoutEffect(()=>{o?p.defines.USE_DASH=``:delete p.defines.USE_DASH,p.needsUpdate=!0},[o,p]),U.useEffect(()=>()=>{h.dispose(),p.dispose()},[h]),U.createElement(`primitive`,k({object:f,ref:c},s),U.createElement(`primitive`,{object:h,attach:`geometry`}),U.createElement(`primitive`,k({object:p,attach:`material`,color:t,vertexColors:!!n,resolution:[u.width,u.height],linewidth:r??i??1,dashed:o,transparent:m===4},s)))}),Ye=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!=`function`;function Xe(e,t){let n=re(e=>e.gl),r=M(T,Ye(e)?Object.values(e):e);return(0,U.useLayoutEffect)(()=>{t?.(r)},[t]),(0,U.useEffect)(()=>{if(`initTexture`in n){let e=[];Array.isArray(r)?e=r:r instanceof h?e=[r]:Ye(r)&&(e=Object.values(r)),e.forEach(e=>{e instanceof h&&n.initTexture(e)})}},[n,r]),(0,U.useMemo)(()=>{if(Ye(e)){let t={},n=0;for(let i in e)t[i]=r[n++];return t}return r},[e,r])}Xe.preload=e=>M.preload(T,e),Xe.clear=e=>M.clear(T,e);var Ze=U.forwardRef(({threshold:e=15,geometry:t,...n},r)=>{let i=U.useRef(null);U.useImperativeHandle(r,()=>i.current,[]);let a=U.useMemo(()=>[0,0,0,1,0,0],[]),o=U.useRef(null),s=U.useRef(null);return U.useLayoutEffect(()=>{let n=i.current.parent,r=t??n?.geometry;if(!r||o.current===r&&s.current===e)return;o.current=r,s.current=e;let a=new b(r,e).attributes.position.array;i.current.geometry.setPositions(a),i.current.geometry.attributes.instanceStart.needsUpdate=!0,i.current.geometry.attributes.instanceEnd.needsUpdate=!0,i.current.computeLineDistances()}),U.createElement(Je,k({segments:!0,points:a,ref:i,raycast:()=>null},n))}),Qe=[{at:0,eye:[7.8,4.2,9.8],target:[-.6,1.7,0]},{at:.24,eye:[7.6,4.15,9.45],target:[-.6,1.7,0]},{at:.49,eye:[-2.25,2.45,1.25],target:[-2.5,2.45,.5]},{at:.51,eye:[1.3,3,-23],target:[0,2,-30]},{at:.78,eye:[4.6,3.6,-22.8],target:[0,2,-30]},{at:1.25,eye:[4.2,3.45,-23.1],target:[0,2,-30]},{at:1.49,eye:[0,2,-27.5],target:[0,2,-31]},{at:1.51,eye:[-2.3,2.45,1.2],target:[0,1.7,0]},{at:1.8,eye:[4.8,3.5,7],target:[0,1.6,-.5]},{at:2.25,eye:[4.45,3.3,6.6],target:[0,1.6,-.5]},{at:2.8,eye:[6.3,2.8,3.3],target:[4.25,1.9,-2.72]},{at:3.25,eye:[6.1,2.72,2.9],target:[4.25,1.9,-2.72]},{at:3.49,eye:[0,1.9,.45],target:[0,1.9,-.4]},{at:3.51,eye:[0,1.5,-61],target:[0,1,-65]},{at:3.8,eye:[6.5,6.2,-55.5],target:[0,1.1,-65]},{at:4.25,eye:[6.15,6,-55.85],target:[0,1.1,-65]},{at:4.49,eye:[0,1.2,-63.5],target:[0,.6,-65]},{at:4.51,eye:[0,1.9,.45],target:[0,1.9,-.4]},{at:4.8,eye:[7.8,4.2,9.8],target:[-.6,1.7,0]},{at:5.25,eye:[7.5,4.05,9.4],target:[-.6,1.7,0]},{at:5.8,eye:[0,1.9,2.5],target:[0,1.9,-.4]},{at:6,eye:[0,1.9,2.35],target:[0,1.9,-.4]}];function $e({progress:e,reducedMotion:t}){let{camera:n,invalidate:r,size:a}=re(),o=(0,U.useMemo)(()=>new E,[]),c=(0,U.useMemo)(()=>new E,[]),l=(0,U.useMemo)(()=>new E,[]),u=(0,U.useRef)(new E(-.6,1.7,0)),d=(0,U.useRef)(!1),f=(0,U.useRef)(e.get()*i);return(0,U.useEffect)(()=>e.on(`change`,()=>r()),[e,r]),(0,U.useEffect)(()=>{r()},[t,r,a]),j((p,m)=>{let h=e.get()*i;t&&(h=Math.round(h));let g=Qe.findIndex(e=>e.at>=h),_=Qe[g<0?Qe.length-1:g],v=Qe[Math.max(0,g-1)],y=s((h-v.at)/(_.at-v.at||1));c.set(...v.eye).lerp(o.set(..._.eye),y),l.set(...v.target).lerp(o.set(..._.target),y),a.width>850&&(l.x-=Math.min(1.5,a.width/1100));let b=t||!d.current||Math.abs(h-f.current)>.65?1:1-Math.exp(-m*10);f.current=h,n.position.lerp(c,b),u.current.lerp(l,b),n.lookAt(u.current),d.current=!0,(n.position.distanceToSquared(c)>1e-5||u.current.distanceToSquared(l)>1e-5)&&r()}),null}var X=r();function et({onNavigate:e,destinationLabels:t,destinationPortal:n}){let{size:r}=re();return(0,X.jsxs)(X.Fragment,{children:[` `,r.width>850&&[{chapter:1,position:[-2.5,3.45,.5]},{chapter:4,position:[.8,2.45,-.2]},{chapter:6,position:[-.8,1.45,-.2]},{chapter:3,position:[3.4,2.05,-2.5]}].map(({chapter:r,position:i})=>(0,X.jsx)(De,{position:i,center:!0,zIndexRange:[4,4],portal:n,calculatePosition:(e,t,n)=>{let r=new E().setFromMatrixPosition(e.matrixWorld).project(t);return[I.clamp((r.x+1)*n.width/2,24,n.width-24),I.clamp((1-r.y)*n.height/2,100,n.height-110)]},children:(0,X.jsxs)(`button`,{type:`button`,className:`journey-destination`,"aria-label":t[r],"aria-describedby":`destination-${r}`,"data-chapter":r,onClick:()=>e(r),children:[(0,X.jsx)(`span`,{"aria-hidden":`true`}),(0,X.jsxs)(`span`,{className:`journey-destination-tooltip`,id:`destination-${r}`,role:`tooltip`,children:[t[r],` ↗`]})]})},r))]})}function tt(e){return(e<.52||e>1.48&&e<3.52||e>4.48)|(e>.48&&e<1.52?2:0)|(e>3.48&&e<4.52?4:0)}var Z=`#d6f481`,nt=`#e7dfc9`;function Q({position:e=[0,0,0],size:t,color:n=`#18221d`,glow:r=0,rotation:i}){return(0,X.jsxs)(`mesh`,{position:e,rotation:i,children:[(0,X.jsx)(`boxGeometry`,{args:t}),(0,X.jsx)(`meshStandardMaterial`,{color:n,roughness:.65,metalness:.25,emissive:n,emissiveIntensity:r})]})}function $({text:e,position:t,size:n=1,color:r=`#c3d6bb`,rotation:i,fontSize:a=45}){let o=(0,U.useMemo)(()=>{let t=document.createElement(`canvas`);t.width=1024,t.height=128;let n=t.getContext(`2d`);n.clearRect(0,0,t.width,t.height),n.font=`500 ${a}px monospace`,n.fillStyle=r,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,512,64);let i=new l(t);return i.colorSpace=R,i},[e,r,a]);return(0,U.useEffect)(()=>()=>o.dispose(),[o]),(0,X.jsxs)(`mesh`,{position:t,rotation:i,children:[(0,X.jsx)(`planeGeometry`,{args:[n*4,n*.5]}),(0,X.jsx)(`meshBasicMaterial`,{map:o,transparent:!0,depthWrite:!1,toneMapped:!1})]})}function rt({source:e,position:t,size:n}){let r=Xe(e);return r.colorSpace=R,(0,X.jsxs)(`mesh`,{position:t,children:[(0,X.jsx)(`planeGeometry`,{args:n}),(0,X.jsx)(`meshBasicMaterial`,{map:r,toneMapped:!1})]})}function it({position:e,size:t,color:n=Z}){let[r,i]=t;return(0,X.jsxs)(`group`,{position:e,children:[(0,X.jsx)(Je,{points:[[-r/2,-i/2,0],[r/2,-i/2,0],[r/2,i/2,0],[-r/2,i/2,0],[-r/2,-i/2,0]],color:n,lineWidth:1,transparent:!0,opacity:.45}),(0,X.jsx)(Q,{position:[-r/2,i/2,0],size:[.1,.1,.04],color:n,glow:1})]})}function at(){let{scene:e}=se(`/models/developer.glb`);return(0,X.jsxs)(`group`,{position:[-2.5,0,.5],rotation:[0,.3,0],children:[(0,X.jsx)(`primitive`,{object:e}),(0,X.jsx)($,{text:`wonku?.dev`,position:[0,1.37,.458],rotation:[-.16,0,0],size:.23,fontSize:110,color:`#d6f481`}),(0,X.jsx)($,{text:`THE MAKER / WONKU`,position:[0,3.3,0],size:.58})]})}var ot=4,st=13;function ct(){let e=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{let t=new ie,n=new d;for(let r=0;r<ot;r++)for(let i=0;i<st;i++){let a=r*st+i;t.position.set(-.55+i*.09,1.3,.37+r*.09),t.updateMatrix(),e.current.setMatrixAt(a,t.matrix),e.current.setColorAt(a,n.set(r===3?`#778f62`:`#3c5141`))}e.current.instanceMatrix.needsUpdate=!0,e.current.instanceColor.needsUpdate=!0,e.current.computeBoundingSphere()},[]),(0,X.jsxs)(`instancedMesh`,{ref:e,args:[void 0,void 0,52],children:[(0,X.jsx)(`boxGeometry`,{args:[.065,.025,.055]}),(0,X.jsx)(`meshStandardMaterial`,{roughness:.65,metalness:.25})]})}function lt({active:e}){let t=(0,U.useMemo)(()=>[new D(0,0),new D(.12,0),new D(.12,.04),new D(.06,.06),new D(.06,.13),new D(.13,.17),new D(.16,.3),new D(.28,.48),new D(.3,.65),new D(.26,.65),new D(.24,.5),new D(.12,.32),new D(0,.3)],[]),n=(0,U.useMemo)(()=>new le([new E(.285,.62,0),new E(.46,.63,0),new E(.49,.46,0),new E(.32,.3,0),new E(.15,.28,0)]),[]),r={color:`#d4b86b`,metalness:.75,roughness:.28,emissive:`#c4a35c`,emissiveIntensity:e?.22:.04};return(0,X.jsxs)(`group`,{position:[0,.14,0],children:[(0,X.jsxs)(`mesh`,{children:[(0,X.jsx)(`latheGeometry`,{args:[t,24]}),(0,X.jsx)(`meshStandardMaterial`,{...r,side:2})]}),[-1,1].map(e=>(0,X.jsxs)(`mesh`,{scale:[e,1,1],children:[(0,X.jsx)(`tubeGeometry`,{args:[n,24,.035,8,!1]}),(0,X.jsx)(`meshStandardMaterial`,{...r})]},e))]})}function ut({award:e}){return(0,X.jsxs)(`group`,{position:[4.25,1.25,-2.72],children:[(0,X.jsx)(Q,{size:[3.7,.12,.85],color:`#687553`}),(0,X.jsx)(Q,{position:[-1.55,-.18,0],size:[.08,.36,.55],color:`#344b35`}),(0,X.jsx)(Q,{position:[1.55,-.18,0],size:[.08,.36,.55],color:`#344b35`}),(0,X.jsx)($,{text:`THE MILESTONES`,position:[0,-.55,.15],size:.95,color:`#c1cf9b`}),[-1.15,0,1.15].map((t,n)=>(0,X.jsxs)(`group`,{position:[t,.06,0],children:[(0,X.jsx)(Q,{position:[0,.07,0],size:[.62,.14,.54],color:`#203125`}),(0,X.jsx)(Q,{position:[0,.11,.28],size:[.42,.08,.025],color:e===n?Z:`#95895f`,glow:e===n?.5:0}),n===0?(0,X.jsx)(lt,{active:e===n}):n===1?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Q,{position:[-.09,.65,0],size:[.13,.62,.025],rotation:[0,0,-.3],color:`#536d91`}),(0,X.jsx)(Q,{position:[.09,.65,.035],size:[.13,.62,.025],rotation:[0,0,.3],color:`#8eabbc`}),(0,X.jsxs)(`mesh`,{position:[0,.32,.04],rotation:[Math.PI/2,0,0],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.25,.25,.055,32]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#c8bd9c`,metalness:.8,roughness:.25})]})]}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Q,{position:[0,.48,0],size:[.57,.68,.09],color:`#a0b6b1`}),(0,X.jsx)(Q,{position:[0,.48,.055],size:[.45,.55,.025],color:`#2a4d45`}),(0,X.jsx)($,{text:`</>`,position:[0,.48,.085],size:.19,color:Z})]}),(0,X.jsx)(`pointLight`,{position:[0,.8,.7],color:n===1?`#bbd2e3`:`#e5cd88`,intensity:e===n?1.5:.2,distance:2.5})]},n))]})}var dt=(0,U.memo)(ut);function ft({project:e,award:t}){return(0,X.jsxs)(`group`,{children:[(0,X.jsx)(Q,{position:[0,-.15,0],size:[14,.2,11],color:`#101a16`}),(0,X.jsx)(`gridHelper`,{args:[14,28,`#47633d`,`#25372b`],position:[0,-.04,0]}),(0,X.jsx)(Q,{position:[0,2.5,-3.2],size:[14,5.2,.15],color:`#111c17`}),(0,X.jsx)(Q,{position:[-7,2.5,0],size:[.1,5.2,6.4],color:`#111c17`}),(0,X.jsx)(Je,{points:[[-6,.05,-3.05],[-6,4.5,-3.05],[6,4.5,-3.05],[6,.05,-3.05]],color:`#547447`,lineWidth:1}),(0,X.jsx)($,{text:`W O N K U  /  DIGITAL WORKSHOP`,position:[0,4.15,-3.05],size:1.4}),(0,X.jsx)(Q,{position:[0,1.15,0],size:[4.2,.14,1.9],color:`#48503a`}),[-1.8,1.8].map(e=>(0,X.jsx)(Q,{position:[e,.52,0],size:[.1,1.05,1.5],color:`#344239`},e)),(0,X.jsx)(Q,{position:[0,1.9,-.3],size:[2.25,1.4,.14],color:`#0c1713`}),(0,X.jsx)(it,{position:[0,1.9,-.21],size:[2.08,1.24]}),(0,X.jsx)(rt,{source:o[e],position:[0,1.9,-.2],size:[1.97,1.12]}),(0,X.jsx)(Q,{position:[0,1.4,-.3],size:[.08,.5,.08],color:`#72816b`}),(0,X.jsx)(Q,{position:[0,1.24,-.3],size:[.65,.06,.35],color:`#72816b`}),(0,X.jsx)(Q,{position:[0,1.26,.52],size:[1.25,.06,.42],color:`#15251c`}),(0,X.jsx)(ct,{}),(0,X.jsx)(Q,{position:[1,1.26,.5],size:[.22,.09,.35],color:`#6e805d`}),(0,X.jsxs)(`mesh`,{position:[-1.6,1.42,.3],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.12,.1,.32,16]}),(0,X.jsx)(`meshStandardMaterial`,{color:nt,roughness:.8})]}),(0,X.jsxs)(`mesh`,{position:[1.7,1.4,-.45],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.15,.11,.36,12]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#b78e60`})]}),Array.from({length:5},(e,t)=>(0,X.jsxs)(`mesh`,{position:[1.7+Math.sin(t*2)*.13,1.78+t%2*.12,-.45+Math.cos(t*2)*.1],scale:[.1,.3,.08],rotation:[0,t,t*.2],children:[(0,X.jsx)(`icosahedronGeometry`,{args:[1,0]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#738e4e`})]},t)),(0,X.jsx)(at,{}),(0,X.jsx)(dt,{award:t}),(0,X.jsxs)(`group`,{position:[-4,2.4,-3.02],rotation:[0,0,-.06],children:[(0,X.jsx)(Q,{size:[2.6,1.65,.08],color:`#26392b`}),(0,X.jsx)(rt,{source:o[(e+1)%o.length],position:[0,0,.06],size:[2.4,1.4]}),(0,X.jsx)($,{text:`SELECTED WORK`,position:[0,-1,.05],size:.5})]}),(0,X.jsxs)(`group`,{position:[3.7,3.7,-3.02],children:[(0,X.jsx)(Q,{size:[3.4,2.2,.1],color:`#65705a`}),(0,X.jsx)(Q,{position:[0,0,.07],size:[3.22,2.02,.04],color:`#283c2c`}),(0,X.jsx)($,{text:`LET'S MAKE IT HAPPEN`,position:[0,.68,.12],size:.68,color:Z}),[-.9,.15,.95].map((e,t)=>(0,X.jsx)(Q,{position:[e,-.03,.12],size:[.65,.75,.02],rotation:[0,0,t*.1-.1],color:[`#d8d8ad`,`#b5ccaf`,`#d1ba93`][t]},e)),(0,X.jsx)(Je,{points:[[-1,-.7,.13],[-.5,-.75,.13],[.2,-.6,.13],[.9,-.6,.13]],color:Z,lineWidth:1})]}),(0,X.jsx)(`pointLight`,{position:[-2,3,2],color:`#c4ed9c`,intensity:18,distance:12}),(0,X.jsx)(`pointLight`,{position:[2,3,-1],color:`#ffd0a0`,intensity:14,distance:10}),(0,X.jsx)(Q,{position:[0,4.6,-1],size:[4,.035,.14],color:Z,glow:2})]})}var pt=(0,U.memo)(ft),mt=[[-2.1,2.8,0],[1.9,3.2,-1.5],[.4,.8,1.4],[-3.2,1.4,-1.8],[3.1,1.6,1.1],[.2,4,-2.2]];function ht(){let e=(0,U.useMemo)(()=>{let e=[];for(let t=0;t<42;t++){let n=Math.acos(1-2*(t+.5)/42),r=t*2.399963,i=2.6+Math.sin(t*2.7)*.8;e.push(new E(Math.sin(n)*Math.cos(r)*i,2.1+Math.cos(n)*i*.75,Math.sin(n)*Math.sin(r)*i))}let t=[];return e.forEach((n,r)=>{e.map((e,t)=>({other:e,j:t,d:n.distanceToSquared(e)})).filter(e=>e.j>r).sort((e,t)=>e.d-t.d).slice(0,2).forEach(e=>t.push(n,e.other))}),{nodes:new ue().setFromPoints(e),lines:new ue().setFromPoints(t)}},[]);return(0,U.useEffect)(()=>()=>{e.nodes.dispose(),e.lines.dispose()},[e]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`points`,{geometry:e.nodes,children:(0,X.jsx)(`pointsMaterial`,{color:`#d4efb0`,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.85})}),(0,X.jsx)(`lineSegments`,{geometry:e.lines,children:(0,X.jsx)(`lineBasicMaterial`,{color:`#90bd79`,transparent:!0,opacity:.22})})]})}function gt({position:e,rotation:t=[0,0,0],variant:n}){return(0,X.jsxs)(`group`,{position:e,rotation:t,children:[(0,X.jsx)(Q,{size:[3,2,.04],color:`#112219`}),(0,X.jsx)(it,{position:[0,0,.04],size:[3,2],color:`#83a56c`}),(0,X.jsx)($,{text:[`WHAT IF / EXPLORATION`,`MAKE IT CLEAR / WIREFRAME`,`THINK IN SYSTEMS`][n],position:[0,1.3,.05],size:.73,color:`#a2bd8e`}),n===1?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(it,{position:[0,0,.07],size:[2.65,1.65],color:`#789c75`}),(0,X.jsx)(Q,{position:[-.85,.55,.08],size:[.55,.08,.02],color:`#a8be87`,glow:.15}),(0,X.jsx)(Q,{position:[.8,.55,.08],size:[.8,.04,.02],color:`#739c74`}),(0,X.jsx)(it,{position:[-.6,-.05,.08],size:[1.1,.6],color:`#a8be87`}),(0,X.jsx)(Q,{position:[.65,.1,.08],size:[.9,.06,.02],color:`#739c74`}),(0,X.jsx)(Q,{position:[.65,-.1,.08],size:[.9,.06,.02],color:`#739c74`}),(0,X.jsx)(Q,{position:[.4,-.55,.08],size:[.4,.18,.02],color:Z,glow:.2})]}):(0,X.jsxs)(X.Fragment,{children:[[-.9,0,.9].map((e,t)=>(0,X.jsx)(it,{position:[e,Math.sin(t*2)*.45,.08],size:[.55,.45],color:t===n?Z:`#739c74`},e)),(0,X.jsx)(Je,{points:[[-.6,0,.08],[-.45,0,.08],[-.45,.4,.08],[-.3,.4,.08]],color:`#a8be87`,lineWidth:1}),(0,X.jsx)(Je,{points:[[.3,.4,.08],[.5,.4,.08],[.5,-.34,.08],[.6,-.34,.08]],color:`#a8be87`,lineWidth:1}),(0,X.jsx)($,{text:n===0?`QUESTION → EXPLORE → IDEA`:`INTERFACE ↔ LOGIC ↔ DATA`,position:[0,-.7,.08],size:.61,color:`#8caa7e`})]}),(0,X.jsx)(Q,{position:[-1.3,.9,.08],size:[.16,.16,.02],color:Z,glow:.2})]})}function _t({idea:e}){return(0,X.jsxs)(`group`,{position:[0,0,-30],children:[(0,X.jsx)(ht,{}),(0,X.jsx)(gt,{position:[-3.8,2.6,-2.8],rotation:[0,.25,-.04],variant:0}),(0,X.jsx)(gt,{position:[0,2.8,-4.5],variant:1}),(0,X.jsx)(gt,{position:[3.7,2.6,-2.8],rotation:[0,-.25,.04],variant:2}),(0,X.jsx)(`gridHelper`,{args:[18,30,`#4b5f35`,`#1a2f22`],position:[0,-.05,0]}),(0,X.jsxs)(`mesh`,{position:[0,2,0],children:[(0,X.jsx)(`icosahedronGeometry`,{args:[4.3,2]}),(0,X.jsx)(`meshBasicMaterial`,{color:`#4f7543`,wireframe:!0,transparent:!0,opacity:.1,side:2})]}),(0,X.jsxs)(`mesh`,{position:[0,2,0],rotation:[Math.PI/2,0,0],children:[(0,X.jsx)(`torusGeometry`,{args:[4.5,.015,4,96]}),(0,X.jsx)(`meshBasicMaterial`,{color:`#b1d38d`})]}),(0,X.jsx)($,{text:`INSIDE THE MIND`,position:[0,5.2,-2],size:1.65,color:Z}),mt.map((t,n)=>(0,X.jsxs)(`group`,{position:t,children:[(0,X.jsxs)(`mesh`,{rotation:[.2,n*.4,.3],children:[(0,X.jsx)(`icosahedronGeometry`,{args:[n===e?.68:.48,1]}),(0,X.jsx)(`meshStandardMaterial`,{color:n===e?Z:`#466a4b`,emissive:n===e?Z:`#233d2b`,emissiveIntensity:n===e?.45:.1,metalness:.6,roughness:.3}),(0,X.jsx)(Ze,{color:n===e?`#f1ffd0`:`#8fb482`})]}),(0,X.jsx)(it,{position:[0,-1,0],size:[2,.5],color:n===e?Z:`#77936b`}),(0,X.jsx)($,{text:[`CURIOSITY`,`CLARITY`,`CRAFT`,`SYSTEMS`,`EMPATHY`,`PERSISTENCE`][n],position:[0,-1,.02],size:.48,color:n===e?Z:`#a3bc98`})]},n)),(0,X.jsx)(Je,{points:[mt[0],mt[1],mt[2],mt[0]],color:`#a6ca7b`,lineWidth:1,dashed:!0,dashSize:.12,gapSize:.16,transparent:!0,opacity:.5}),Array.from({length:8},(e,t)=>(0,X.jsx)(it,{position:[Math.cos(t*.8)*5.4,1.6+Math.sin(t*1.3),Math.sin(t*.8)*5.4],size:[1.5,1],color:`#4a7357`},t)),(0,X.jsx)(`pointLight`,{position:[0,4,2],color:Z,intensity:26,distance:14})]})}var vt=(0,U.memo)(_t),yt=R,bt=class e extends c{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit=`px`}load(e,t,n,r){let i=this,a=new g(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){let t=this;function n(e,t){if(e.nodeType!==1)return;let a=y(e),o=!1,m=null;switch(e.nodeName){case`svg`:t=p(e,t);break;case`style`:i(e);break;case`g`:t=p(e,t);break;case`path`:t=p(e,t),e.hasAttribute(`d`)&&(m=r(e));break;case`rect`:t=p(e,t),m=s(e);break;case`polygon`:t=p(e,t),m=c(e);break;case`polyline`:t=p(e,t),m=l(e);break;case`circle`:t=p(e,t),m=u(e);break;case`ellipse`:t=p(e,t),m=d(e);break;case`line`:t=p(e,t),m=f(e);break;case`defs`:o=!0;break;case`use`:t=p(e,t);let a=(e.getAttributeNS(`http://www.w3.org/1999/xlink`,`href`)||``).substring(1),h=e.viewportElement.getElementById(a);h?n(h,t):console.warn(`SVGLoader: 'use node' references non-existent node id: `+a)}m&&(t.fill!==void 0&&t.fill!==`none`&&m.color.setStyle(t.fill,yt),S(m,z),k.push(m),m.userData={node:e,style:t});let h=e.childNodes;for(let e=0;e<h.length;e++){let r=h[e];o&&r.nodeName!==`style`&&r.nodeName!==`defs`||n(r,t)}a&&(j.pop(),j.length>0?z.copy(j[j.length-1]):z.identity())}function r(e){let t=new x,n=new D,r=new D,i=new D,o=!0,s=!1,c=e.getAttribute(`d`);if(c===``||c===`none`)return null;let l=c.match(/[a-df-z][^a-df-z]*/gi);for(let e=0,c=l.length;e<c;e++){let c=l[e],u=c.charAt(0),d=c.slice(1).trim();o===!0&&(s=!0,o=!1);let f;switch(u){case`M`:f=h(d);for(let e=0,a=f.length;e<a;e+=2)n.x=f[e+0],n.y=f[e+1],r.x=n.x,r.y=n.y,e===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),e===0&&i.copy(n);break;case`H`:f=h(d);for(let e=0,a=f.length;e<a;e++)n.x=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`V`:f=h(d);for(let e=0,a=f.length;e<a;e++)n.y=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`L`:f=h(d);for(let e=0,a=f.length;e<a;e+=2)n.x=f[e+0],n.y=f[e+1],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`C`:f=h(d);for(let e=0,a=f.length;e<a;e+=6)t.bezierCurveTo(f[e+0],f[e+1],f[e+2],f[e+3],f[e+4],f[e+5]),r.x=f[e+2],r.y=f[e+3],n.x=f[e+4],n.y=f[e+5],e===0&&s===!0&&i.copy(n);break;case`S`:f=h(d);for(let e=0,a=f.length;e<a;e+=4)t.bezierCurveTo(m(n.x,r.x),m(n.y,r.y),f[e+0],f[e+1],f[e+2],f[e+3]),r.x=f[e+0],r.y=f[e+1],n.x=f[e+2],n.y=f[e+3],e===0&&s===!0&&i.copy(n);break;case`Q`:f=h(d);for(let e=0,a=f.length;e<a;e+=4)t.quadraticCurveTo(f[e+0],f[e+1],f[e+2],f[e+3]),r.x=f[e+0],r.y=f[e+1],n.x=f[e+2],n.y=f[e+3],e===0&&s===!0&&i.copy(n);break;case`T`:f=h(d);for(let e=0,a=f.length;e<a;e+=2){let a=m(n.x,r.x),o=m(n.y,r.y);t.quadraticCurveTo(a,o,f[e+0],f[e+1]),r.x=a,r.y=o,n.x=f[e+0],n.y=f[e+1],e===0&&s===!0&&i.copy(n)}break;case`A`:f=h(d,[3,4],7);for(let e=0,o=f.length;e<o;e+=7){if(f[e+5]==n.x&&f[e+6]==n.y)continue;let o=n.clone();n.x=f[e+5],n.y=f[e+6],r.x=n.x,r.y=n.y,a(t,f[e],f[e+1],f[e+2],f[e+3],f[e+4],o,n),e===0&&s===!0&&i.copy(n)}break;case`m`:f=h(d);for(let e=0,a=f.length;e<a;e+=2)n.x+=f[e+0],n.y+=f[e+1],r.x=n.x,r.y=n.y,e===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),e===0&&i.copy(n);break;case`h`:f=h(d);for(let e=0,a=f.length;e<a;e++)n.x+=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`v`:f=h(d);for(let e=0,a=f.length;e<a;e++)n.y+=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`l`:f=h(d);for(let e=0,a=f.length;e<a;e+=2)n.x+=f[e+0],n.y+=f[e+1],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`c`:f=h(d);for(let e=0,a=f.length;e<a;e+=6)t.bezierCurveTo(n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3],n.x+f[e+4],n.y+f[e+5]),r.x=n.x+f[e+2],r.y=n.y+f[e+3],n.x+=f[e+4],n.y+=f[e+5],e===0&&s===!0&&i.copy(n);break;case`s`:f=h(d);for(let e=0,a=f.length;e<a;e+=4)t.bezierCurveTo(m(n.x,r.x),m(n.y,r.y),n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3]),r.x=n.x+f[e+0],r.y=n.y+f[e+1],n.x+=f[e+2],n.y+=f[e+3],e===0&&s===!0&&i.copy(n);break;case`q`:f=h(d);for(let e=0,a=f.length;e<a;e+=4)t.quadraticCurveTo(n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3]),r.x=n.x+f[e+0],r.y=n.y+f[e+1],n.x+=f[e+2],n.y+=f[e+3],e===0&&s===!0&&i.copy(n);break;case`t`:f=h(d);for(let e=0,a=f.length;e<a;e+=2){let a=m(n.x,r.x),o=m(n.y,r.y);t.quadraticCurveTo(a,o,n.x+f[e+0],n.y+f[e+1]),r.x=a,r.y=o,n.x+=f[e+0],n.y+=f[e+1],e===0&&s===!0&&i.copy(n)}break;case`a`:f=h(d,[3,4],7);for(let e=0,o=f.length;e<o;e+=7){if(f[e+5]==0&&f[e+6]==0)continue;let o=n.clone();n.x+=f[e+5],n.y+=f[e+6],r.x=n.x,r.y=n.y,a(t,f[e],f[e+1],f[e+2],f[e+3],f[e+4],o,n),e===0&&s===!0&&i.copy(n)}break;case`Z`:case`z`:t.currentPath.autoClose=!0,t.currentPath.curves.length>0&&(n.copy(i),t.currentPath.currentPoint.copy(n),o=!0);break;default:console.warn(c)}s=!1}return t}function i(e){if(e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length)for(let t=0;t<e.sheet.cssRules.length;t++){let n=e.sheet.cssRules[t];if(n.type!==1)continue;let r=n.selectorText.split(/,/gm).filter(Boolean).map(e=>e.trim());for(let e=0;e<r.length;e++){let t=Object.fromEntries(Object.entries(n.style).filter(([,e])=>e!==``));te[r[e]]=Object.assign(te[r[e]]||{},t)}}}function a(e,t,n,r,i,a,s,c){if(t==0||n==0){e.lineTo(c.x,c.y);return}r=r*Math.PI/180,t=Math.abs(t),n=Math.abs(n);let l=(s.x-c.x)/2,u=(s.y-c.y)/2,d=Math.cos(r)*l+Math.sin(r)*u,f=-Math.sin(r)*l+Math.cos(r)*u,p=t*t,m=n*n,h=d*d,g=f*f,_=h/p+g/m;if(_>1){let e=Math.sqrt(_);t=e*t,n=e*n,p=t*t,m=n*n}let v=p*g+m*h,y=(p*m-v)/v,b=Math.sqrt(Math.max(0,y));i===a&&(b=-b);let x=b*t*f/n,S=-b*n*d/t,C=Math.cos(r)*x-Math.sin(r)*S+(s.x+c.x)/2,w=Math.sin(r)*x+Math.cos(r)*S+(s.y+c.y)/2,T=o(1,0,(d-x)/t,(f-S)/n),ee=o((d-x)/t,(f-S)/n,(-d-x)/t,(-f-S)/n)%(Math.PI*2);e.currentPath.absellipse(C,w,t,n,T,T+ee,a===0,r)}function o(e,t,n,r){let i=e*n+t*r,a=Math.sqrt(e*e+t*t)*Math.sqrt(n*n+r*r),o=Math.acos(Math.max(-1,Math.min(1,i/a)));return e*r-t*n<0&&(o=-o),o}function s(e){let t=v(e.getAttribute(`x`)||0),n=v(e.getAttribute(`y`)||0),r=v(e.getAttribute(`rx`)||e.getAttribute(`ry`)||0),i=v(e.getAttribute(`ry`)||e.getAttribute(`rx`)||0),a=v(e.getAttribute(`width`)),o=v(e.getAttribute(`height`)),s=.448084975506,c=new x;return c.moveTo(t+r,n),c.lineTo(t+a-r,n),(r!==0||i!==0)&&c.bezierCurveTo(t+a-r*s,n,t+a,n+i*s,t+a,n+i),c.lineTo(t+a,n+o-i),(r!==0||i!==0)&&c.bezierCurveTo(t+a,n+o-i*s,t+a-r*s,n+o,t+a-r,n+o),c.lineTo(t+r,n+o),(r!==0||i!==0)&&c.bezierCurveTo(t+r*s,n+o,t,n+o-i*s,t,n+o-i),c.lineTo(t,n+i),(r!==0||i!==0)&&c.bezierCurveTo(t,n+i*s,t+r*s,n,t+r,n),c}function c(e){function t(e,t,n){let a=v(t),o=v(n);i===0?r.moveTo(a,o):r.lineTo(a,o),i++}let n=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,r=new x,i=0;return e.getAttribute(`points`).replace(n,t),r.currentPath.autoClose=!0,r}function l(e){function t(e,t,n){let a=v(t),o=v(n);i===0?r.moveTo(a,o):r.lineTo(a,o),i++}let n=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,r=new x,i=0;return e.getAttribute(`points`).replace(n,t),r.currentPath.autoClose=!1,r}function u(e){let t=v(e.getAttribute(`cx`)||0),n=v(e.getAttribute(`cy`)||0),r=v(e.getAttribute(`r`)||0),i=new P;i.absarc(t,n,r,0,Math.PI*2);let a=new x;return a.subPaths.push(i),a}function d(e){let t=v(e.getAttribute(`cx`)||0),n=v(e.getAttribute(`cy`)||0),r=v(e.getAttribute(`rx`)||0),i=v(e.getAttribute(`ry`)||0),a=new P;a.absellipse(t,n,r,i,0,Math.PI*2);let o=new x;return o.subPaths.push(a),o}function f(e){let t=v(e.getAttribute(`x1`)||0),n=v(e.getAttribute(`y1`)||0),r=v(e.getAttribute(`x2`)||0),i=v(e.getAttribute(`y2`)||0),a=new x;return a.moveTo(t,n),a.lineTo(r,i),a.currentPath.autoClose=!1,a}function p(e,t){t=Object.assign({},t);let n={};if(e.hasAttribute(`class`)){let t=e.getAttribute(`class`).split(/\s/).filter(Boolean).map(e=>e.trim());for(let e=0;e<t.length;e++)n=Object.assign(n,te[`.`+t[e]])}e.hasAttribute(`id`)&&(n=Object.assign(n,te[`#`+e.getAttribute(`id`)]));function r(r,i,a){a===void 0&&(a=function(e){return e.startsWith(`url`)&&console.warn(`SVGLoader: url access in attributes is not implemented.`),e}),e.hasAttribute(r)&&(t[i]=a(e.getAttribute(r))),n[r]&&(t[i]=a(n[r])),e.style&&e.style[r]!==``&&(t[i]=a(e.style[r]))}function i(e){return Math.max(0,Math.min(1,v(e)))}function a(e){return Math.max(0,v(e))}return r(`fill`,`fill`),r(`fill-opacity`,`fillOpacity`,i),r(`fill-rule`,`fillRule`),r(`opacity`,`opacity`,i),r(`stroke`,`stroke`),r(`stroke-opacity`,`strokeOpacity`,i),r(`stroke-width`,`strokeWidth`,a),r(`stroke-linejoin`,`strokeLineJoin`),r(`stroke-linecap`,`strokeLineCap`),r(`stroke-miterlimit`,`strokeMiterLimit`,a),r(`visibility`,`visibility`),t}function m(e,t){return e-(t-e)}function h(e,t,n){if(typeof e!=`string`)throw TypeError(`Invalid input: `+typeof e);let r={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},i=0,a=!0,o=``,s=``,c=[];function l(e,t,n){let r=SyntaxError(`Unexpected character "`+e+`" at index `+t+`.`);throw r.partial=n,r}function u(){o!==``&&(s===``?c.push(Number(o)):c.push(Number(o)*10**Number(s))),o=``,s=``}let d,f=e.length;for(let p=0;p<f;p++){if(d=e[p],Array.isArray(t)&&t.includes(c.length%n)&&r.FLAGS.test(d)){i=1,o=d,u();continue}if(i===0){if(r.WHITESPACE.test(d))continue;if(r.DIGIT.test(d)||r.SIGN.test(d)){i=1,o=d;continue}if(r.POINT.test(d)){i=2,o=d;continue}r.COMMA.test(d)&&(a&&l(d,p,c),a=!0)}if(i===1){if(r.DIGIT.test(d)){o+=d;continue}if(r.POINT.test(d)){o+=d,i=2;continue}if(r.EXP.test(d)){i=3;continue}r.SIGN.test(d)&&o.length===1&&r.SIGN.test(o[0])&&l(d,p,c)}if(i===2){if(r.DIGIT.test(d)){o+=d;continue}if(r.EXP.test(d)){i=3;continue}r.POINT.test(d)&&o[o.length-1]===`.`&&l(d,p,c)}if(i===3){if(r.DIGIT.test(d)){s+=d;continue}if(r.SIGN.test(d)){if(s===``){s+=d;continue}s.length===1&&r.SIGN.test(s)&&l(d,p,c)}}r.WHITESPACE.test(d)?(u(),i=0,a=!1):r.COMMA.test(d)?(u(),i=0,a=!0):r.SIGN.test(d)?(u(),i=1,o=d):r.POINT.test(d)?(u(),i=2,o=d):l(d,p,c)}return u(),c}let g=[`mm`,`cm`,`in`,`pt`,`pc`,`px`],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function v(e){let n=`px`;if(typeof e==`string`||e instanceof String)for(let t=0,r=g.length;t<r;t++){let r=g[t];if(e.endsWith(r)){n=r,e=e.substring(0,e.length-r.length);break}}let r;return n===`px`&&t.defaultUnit!==`px`?r=_.in[t.defaultUnit]/t.defaultDPI:(r=_[n][t.defaultUnit],r<0&&(r=_[n].in*t.defaultDPI)),r*parseFloat(e)}function y(e){if(!(e.hasAttribute(`transform`)||e.nodeName===`use`&&(e.hasAttribute(`x`)||e.hasAttribute(`y`))))return null;let t=b(e);return j.length>0&&t.premultiply(j[j.length-1]),z.copy(t),j.push(t),t}function b(e){let t=new A,n=M;if(e.nodeName===`use`&&(e.hasAttribute(`x`)||e.hasAttribute(`y`))){let n=v(e.getAttribute(`x`)),r=v(e.getAttribute(`y`));t.translate(n,r)}if(e.hasAttribute(`transform`)){let r=e.getAttribute(`transform`).split(`)`);for(let e=r.length-1;e>=0;e--){let i=r[e].trim();if(i===``)continue;let a=i.indexOf(`(`),o=i.length;if(a>0&&a<o){let e=i.slice(0,a),t=h(i.slice(a+1));switch(n.identity(),e){case`translate`:if(t.length>=1){let e=t[0],r=0;t.length>=2&&(r=t[1]),n.translate(e,r)}break;case`rotate`:if(t.length>=1){let e=0,r=0,i=0;e=t[0]*Math.PI/180,t.length>=3&&(r=t[1],i=t[2]),N.makeTranslation(-r,-i),F.makeRotation(e),I.multiplyMatrices(F,N),N.makeTranslation(r,i),n.multiplyMatrices(N,I)}break;case`scale`:if(t.length>=1){let e=t[0],r=e;t.length>=2&&(r=t[1]),n.scale(e,r)}break;case`skewX`:t.length===1&&n.set(1,Math.tan(t[0]*Math.PI/180),0,0,1,0,0,0,1);break;case`skewY`:t.length===1&&n.set(1,0,0,Math.tan(t[0]*Math.PI/180),1,0,0,0,1);break;case`matrix`:t.length===6&&n.set(t[0],t[2],t[4],t[1],t[3],t[5],0,0,1)}}t.premultiply(n)}}return t}function S(e,t){function n(e){R.set(e.x,e.y,1).applyMatrix3(t),e.set(R.x,R.y)}function r(e){let n=e.xRadius,r=e.yRadius,i=Math.cos(e.aRotation),a=Math.sin(e.aRotation),o=new E(n*i,n*a,0),s=new E(-r*a,r*i,0),c=o.applyMatrix3(t),l=s.applyMatrix3(t),u=M.set(c.x,l.x,0,c.y,l.y,0,0,0,1),d=N.copy(u).invert(),f=F.copy(d).transpose().multiply(d).elements,p=O(f[0],f[1],f[4]),m=Math.sqrt(p.rt1),h=Math.sqrt(p.rt2);if(e.xRadius=1/m,e.yRadius=1/h,e.aRotation=Math.atan2(p.sn,p.cs),!((e.aEndAngle-e.aStartAngle)%(2*Math.PI)<2**-52)){let n=N.set(m,0,0,0,h,0,0,0,1),r=F.set(p.cs,p.sn,0,-p.sn,p.cs,0,0,0,1),i=n.multiply(r).multiply(u),a=e=>{let{x:t,y:n}=new E(Math.cos(e),Math.sin(e),0).applyMatrix3(i);return Math.atan2(n,t)};e.aStartAngle=a(e.aStartAngle),e.aEndAngle=a(e.aEndAngle),C(t)&&(e.aClockwise=!e.aClockwise)}}function i(e){let n=T(t),r=ee(t);e.xRadius*=n,e.yRadius*=r;let i=n>2**-52?Math.atan2(t.elements[1],t.elements[0]):Math.atan2(-t.elements[3],t.elements[4]);e.aRotation+=i,C(t)&&(e.aStartAngle*=-1,e.aEndAngle*=-1,e.aClockwise=!e.aClockwise)}let a=e.subPaths;for(let e=0,o=a.length;e<o;e++){let o=a[e].curves;for(let e=0;e<o.length;e++){let a=o[e];a.isLineCurve?(n(a.v1),n(a.v2)):a.isCubicBezierCurve?(n(a.v0),n(a.v1),n(a.v2),n(a.v3)):a.isQuadraticBezierCurve?(n(a.v0),n(a.v1),n(a.v2)):a.isEllipseCurve&&(L.set(a.aX,a.aY),n(L),a.aX=L.x,a.aY=L.y,w(t)?r(a):i(a))}}}function C(e){let t=e.elements;return t[0]*t[4]-t[1]*t[3]<0}function w(e){let t=e.elements,n=t[0]*t[3]+t[1]*t[4];if(n===0)return!1;let r=T(e),i=ee(e);return Math.abs(n/(r*i))>2**-52}function T(e){let t=e.elements;return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function ee(e){let t=e.elements;return Math.sqrt(t[3]*t[3]+t[4]*t[4])}function O(e,t,n){let r,i,a,o,s,c=e+n,l=e-n,u=Math.sqrt(l*l+4*t*t);return c>0?(r=.5*(c+u),s=1/r,i=e*s*n-t*s*t):c<0?i=.5*(c-u):(r=.5*u,i=-.5*u),a=l>0?l+u:l-u,Math.abs(a)>2*Math.abs(t)?(s=-2*t/a,o=1/Math.sqrt(1+s*s),a=s*o):Math.abs(t)===0?(a=1,o=0):(s=-.5*a/t,a=1/Math.sqrt(1+s*s),o=s*a),l>0&&(s=a,a=-o,o=s),{rt1:r,rt2:i,cs:a,sn:o}}let k=[],te={},j=[],M=new A,N=new A,F=new A,I=new A,L=new D,R=new E,z=new A,B=new DOMParser().parseFromString(e,`image/svg+xml`);return n(B.documentElement,{fill:`#000`,fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:`miter`,strokeLineCap:`butt`,strokeMiterLimit:4}),{paths:k,xml:B.documentElement}}static createShapes(e){let t=999999999,n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function i(e,t,i,o){let s=e.x,c=t.x,l=i.x,u=o.x,d=e.y,f=t.y,p=i.y,m=o.y,h=(u-l)*(d-p)-(m-p)*(s-l),g=(c-s)*(d-p)-(f-d)*(s-l),_=(m-p)*(c-s)-(u-l)*(f-d),v=h/_,y=g/_;if(_===0&&h!==0||v<=0||v>=1||y<0||y>1)return null;if(h===0&&_===0){for(let l=0;l<2;l++){if(a(l===0?i:o,e,t),r.loc==n.ORIGIN){let e=l===0?i:o;return{x:e.x,y:e.y,t:r.t}}if(r.loc==n.BETWEEN)return{x:+(s+r.t*(c-s)).toPrecision(10),y:+(d+r.t*(f-d)).toPrecision(10),t:r.t}}return null}for(let s=0;s<2;s++)if(a(s===0?i:o,e,t),r.loc==n.ORIGIN){let e=s===0?i:o;return{x:e.x,y:e.y,t:r.t}}return{x:+(s+v*(c-s)).toPrecision(10),y:+(d+v*(f-d)).toPrecision(10),t:v}}function a(e,t,i){let a=i.x-t.x,o=i.y-t.y,s=e.x-t.x,c=e.y-t.y,l=a*c-s*o;if(e.x===t.x&&e.y===t.y){r.loc=n.ORIGIN,r.t=0;return}if(e.x===i.x&&e.y===i.y){r.loc=n.DESTINATION,r.t=1;return}if(l<-(2**-52)){r.loc=n.LEFT;return}if(l>2**-52){r.loc=n.RIGHT;return}if(a*s<0||o*c<0){r.loc=n.BEHIND;return}if(Math.sqrt(a*a+o*o)<Math.sqrt(s*s+c*c)){r.loc=n.BEYOND;return}let u;u=a===0?c/o:s/a,r.loc=n.BETWEEN,r.t=u}function o(e,t){let n=[],r=[];for(let a=1;a<e.length;a++){let o=e[a-1],s=e[a];for(let e=1;e<t.length;e++){let a=t[e-1],c=t[e],l=i(o,s,a,c);l!==null&&n.find(e=>e.t<=l.t+2**-52&&e.t>=l.t-2**-52)===void 0&&(n.push(l),r.push(new D(l.x,l.y)))}}return r}function s(e,t,n){let r=new D;t.getCenter(r);let i=[];return n.forEach(t=>{t.boundingBox.containsPoint(r)&&o(e,t.points).forEach(e=>{i.push({identifier:t.identifier,isCW:t.isCW,point:e})})}),i.sort((e,t)=>e.point.x-t.point.x),i}function c(e,t,n,r,i){(i==null||i===``)&&(i=`nonzero`);let a=new D;e.boundingBox.getCenter(a);let o=s([new D(n,a.y),new D(r,a.y)],e.boundingBox,t);o.sort((e,t)=>e.point.x-t.point.x);let c=[],l=[];o.forEach(t=>{t.identifier===e.identifier?c.push(t):l.push(t)});let u=c[0].point.x,d=[],f=0;for(;f<l.length&&l[f].point.x<u;)d.length>0&&d[d.length-1]===l[f].identifier?d.pop():d.push(l[f].identifier),f++;if(d.push(e.identifier),i===`evenodd`){let t=d.length%2==0,n=d[d.length-2];return{identifier:e.identifier,isHole:t,for:n}}if(i===`nonzero`){let n=!0,r=null,i=null;for(let e=0;e<d.length;e++){let a=d[e];n?(i=t[a].isCW,n=!1,r=a):i!==t[a].isCW&&(i=t[a].isCW,n=!0)}return{identifier:e.identifier,isHole:n,for:r}}console.warn(`fill-rule: "`+i+`" is currently not implemented.`)}let l=t,u=-999999999,d=e.subPaths.map(e=>{let n=e.getPoints(),r=-999999999,i=t,a=-999999999,o=t;for(let e=0;e<n.length;e++){let t=n[e];t.y>r&&(r=t.y),t.y<i&&(i=t.y),t.x>a&&(a=t.x),t.x<o&&(o=t.x)}return u<=a&&(u=a+1),l>=o&&(l=o-1),{curves:e.curves,points:n,isCW:S.isClockWise(n),identifier:-1,boundingBox:new de(new D(o,i),new D(a,r))}});d=d.filter(e=>e.points.length>1);for(let e=0;e<d.length;e++)d[e].identifier=e;let f=d.map(t=>c(t,d,l,u,e.userData?e.userData.style.fillRule:void 0)),p=[];return d.forEach(e=>{if(!f[e.identifier].isHole){let t=new y;t.curves=e.curves,f.filter(t=>t.isHole&&t.for===e.identifier).forEach(e=>{let n=d[e.identifier],r=new P;r.curves=n.curves,t.holes.push(r)}),p.push(t)}}),p}static getStrokeStyle(e,t,n,r,i){return e=e===void 0?1:e,t=t===void 0?`#000`:t,n=n===void 0?`miter`:n,r=r===void 0?`butt`:r,i=i===void 0?4:i,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:i}}static pointsToStroke(t,n,r,i){let a=[],o=[],s=[];if(e.pointsToStrokeWithBuffers(t,n,r,i,a,o,s)===0)return null;let c=new ue;return c.setAttribute(`position`,new v(a,3)),c.setAttribute(`normal`,new v(o,3)),c.setAttribute(`uv`,new v(s,2)),c}static pointsToStrokeWithBuffers(e,t,n,r,i,a,o,s){let c=new D,l=new D,u=new D,d=new D,f=new D,p=new D,m=new D,h=new D,g=new D,_=new D,v=new D,y=new D,b=new D,x=new D,S=new D,C=new D,w=new D;n=n===void 0?12:n,r=r===void 0?.001:r,s=s===void 0?0:s,e=oe(e);let T=e.length;if(T<2)return 0;let ee=e[0].equals(e[T-1]),E,O=e[0],k,A=t.strokeWidth/2,te=1/(T-1),j=0,M,N,P,F,I=!1,L=0,R=s*3,z=s*2;B(e[0],e[1],c).multiplyScalar(A),h.copy(e[0]).sub(c),g.copy(e[0]).add(c),_.copy(h),v.copy(g);for(let n=1;n<T;n++){E=e[n],k=n===T-1?ee?e[1]:void 0:e[n+1];let r=c;if(B(O,E,r),u.copy(r).multiplyScalar(A),y.copy(E).sub(u),b.copy(E).add(u),M=j+te,N=!1,k!==void 0){B(E,k,l),u.copy(l).multiplyScalar(A),x.copy(E).sub(u),S.copy(E).add(u),P=!0,u.subVectors(k,O),r.dot(u)<0&&(P=!1),n===1&&(I=P),u.subVectors(k,E),u.normalize();let e=Math.abs(r.dot(u));if(e>2**-52){let n=A/e;u.multiplyScalar(-n),d.subVectors(E,O),f.copy(d).setLength(n).add(u),C.copy(f).negate();let r=f.length(),i=d.length();d.divideScalar(i),p.subVectors(k,E);let a=p.length();switch(p.divideScalar(a),d.dot(C)<i&&p.dot(C)<a&&(N=!0),w.copy(f).add(E),C.add(E),F=!1,N?P?(S.copy(C),b.copy(C)):(x.copy(C),y.copy(C)):re(),t.strokeLineJoin){case`bevel`:ie(P,N,M);break;case`round`:ae(P,N),P?ne(E,y,x,M,0):ne(E,S,b,M,1);break;default:let e=A*t.strokeMiterLimit/r;if(e<1){if(t.strokeLineJoin!==`miter-clip`){ie(P,N,M);break}ae(P,N),P?(p.subVectors(w,y).multiplyScalar(e).add(y),m.subVectors(w,x).multiplyScalar(e).add(x),V(y,M,0),V(p,M,0),V(E,M,.5),V(E,M,.5),V(p,M,0),V(m,M,0),V(E,M,.5),V(m,M,0),V(x,M,0)):(p.subVectors(w,b).multiplyScalar(e).add(b),m.subVectors(w,S).multiplyScalar(e).add(S),V(b,M,1),V(p,M,1),V(E,M,.5),V(E,M,.5),V(p,M,1),V(m,M,1),V(E,M,.5),V(m,M,1),V(S,M,1))}else N?(P?(V(g,j,1),V(h,j,0),V(w,M,0),V(g,j,1),V(w,M,0),V(C,M,1)):(V(g,j,1),V(h,j,0),V(w,M,1),V(h,j,0),V(C,M,0),V(w,M,1)),P?x.copy(w):S.copy(w)):P?(V(y,M,0),V(w,M,0),V(E,M,.5),V(E,M,.5),V(w,M,0),V(x,M,0)):(V(b,M,1),V(w,M,1),V(E,M,.5),V(E,M,.5),V(w,M,1),V(S,M,1)),F=!0}}else re()}else re();!ee&&n===T-1&&H(e[0],_,v,P,!0,j),j=M,O=E,h.copy(x),g.copy(S)}if(!ee)H(E,y,b,P,!1,M);else if(N&&i){let e=w,t=C;I!==P&&(e=C,t=w),P?(F||I)&&(t.toArray(i,0),t.toArray(i,9),F&&e.toArray(i,3)):(F||!I)&&(t.toArray(i,3),t.toArray(i,9),F&&e.toArray(i,0))}return L;function B(e,t,n){return n.subVectors(t,e),n.set(-n.y,n.x).normalize()}function V(e,t,n){i&&(i[R]=e.x,i[R+1]=e.y,i[R+2]=0,a&&(a[R]=0,a[R+1]=0,a[R+2]=1),R+=3,o&&(o[z]=t,o[z+1]=n,z+=2)),L+=3}function ne(e,t,r,i,a){c.copy(t).sub(e).normalize(),l.copy(r).sub(e).normalize();let o=Math.PI,s=c.dot(l);Math.abs(s)<1&&(o=Math.abs(Math.acos(s))),o/=n,u.copy(t);for(let t=0,r=n-1;t<r;t++)d.copy(u).rotateAround(e,o),V(u,i,a),V(d,i,a),V(e,i,.5),u.copy(d);V(d,i,a),V(r,i,a),V(e,i,.5)}function re(){V(g,j,1),V(h,j,0),V(y,M,0),V(g,j,1),V(y,M,0),V(b,M,1)}function ie(e,t,n){t?e?(V(g,j,1),V(h,j,0),V(y,M,0),V(g,j,1),V(y,M,0),V(C,M,1),V(y,n,0),V(x,n,0),V(C,n,.5)):(V(g,j,1),V(h,j,0),V(b,M,1),V(h,j,0),V(C,M,0),V(b,M,1),V(b,n,1),V(C,n,0),V(S,n,1)):e?(V(y,n,0),V(x,n,0),V(E,n,.5)):(V(b,n,1),V(S,n,0),V(E,n,.5))}function ae(e,t){t&&(e?(V(g,j,1),V(h,j,0),V(y,M,0),V(g,j,1),V(y,M,0),V(C,M,1),V(y,j,0),V(E,M,.5),V(C,M,1),V(E,M,.5),V(x,j,0),V(C,M,1)):(V(g,j,1),V(h,j,0),V(b,M,1),V(h,j,0),V(C,M,0),V(b,M,1),V(b,j,1),V(C,M,0),V(E,M,.5),V(E,M,.5),V(C,M,0),V(S,j,1)))}function H(e,n,r,a,s,f){switch(t.strokeLineCap){case`round`:s?ne(e,r,n,f,.5):ne(e,n,r,f,.5);break;case`square`:if(s)c.subVectors(n,e),l.set(c.y,-c.x),u.addVectors(c,l).add(e),d.subVectors(l,c).add(e),a?(u.toArray(i,3),d.toArray(i,0),d.toArray(i,9)):(u.toArray(i,3),o[7]===1?d.toArray(i,9):u.toArray(i,9),d.toArray(i,0));else{c.subVectors(r,e),l.set(c.y,-c.x),u.addVectors(c,l).add(e),d.subVectors(l,c).add(e);let t=i.length;a?(u.toArray(i,t-3),d.toArray(i,t-6),d.toArray(i,t-12)):(d.toArray(i,t-6),u.toArray(i,t-3),d.toArray(i,t-12))}}}function oe(e){let t=!1;for(let n=1,i=e.length-1;n<i;n++)if(e[n].distanceTo(e[n+1])<r){t=!0;break}if(!t)return e;let n=[];n.push(e[0]);for(let t=1,i=e.length-1;t<i;t++)e[t].distanceTo(e[t+1])>=r&&n.push(e[t]);return n.push(e[e.length-1]),n}}};function xt({source:e,active:t}){let n=M(bt,e),r=(0,U.useMemo)(()=>{let e=n.xml.documentElement??n.xml,t=[],r=new te;for(let i of n.paths){let n=i.userData?.style,a=i.color,o=n?.fill?.match(/url\(['"]?#([^)'"\s]+)/)?.[1];if(o){let t=e.querySelector(`[id="${o}"]`)?.querySelectorAll(`stop`),n=t?.[0]?.getAttribute(`stop-color`),r=t?.[t.length-1]?.getAttribute(`stop-color`);n&&(a=new d(n).lerp(new d(r||n),.5))}if(n?.fill!==`none`)for(let e of bt.createShapes(i)){let n=new f(e,{depth:3,bevelEnabled:!1,curveSegments:12});n.computeBoundingBox(),r.union(n.boundingBox),t.push({geometry:n,color:a,order:t.length})}if(n?.stroke&&n.stroke!==`none`)for(let e of i.subPaths){let i=e.getPoints(48).map(e=>new E(e.x,e.y,0));if(i.length<2)continue;let a=i[0].distanceToSquared(i.at(-1))<1e-5;if(a&&i.pop(),i.length<2)continue;let o=new le(i,a,`centripetal`),s=new ee(o,Math.max(12,i.length),Number(n.strokeWidth||1)/2,6,a);s.computeBoundingBox(),r.union(s.boundingBox),t.push({geometry:s,color:new d(n.stroke),order:t.length,stroke:!0})}}let i=r.getSize(new E);return{pieces:t,center:r.getCenter(new E),scale:1.22/Math.max(i.x,i.y,1)}},[n]);return(0,U.useEffect)(()=>()=>r.pieces.forEach(e=>e.geometry.dispose()),[r]),(0,X.jsx)(qe,{position:[0,.86,0],children:(0,X.jsx)(`group`,{rotation:[.08,-.18,0],children:(0,X.jsx)(`group`,{scale:[r.scale,-r.scale,.055],children:(0,X.jsx)(`group`,{position:[-r.center.x,-r.center.y,-1.5],children:r.pieces.map((e,n)=>(0,X.jsx)(`mesh`,{geometry:e.geometry,position:[0,0,e.order*.05],scale:[1,1,e.stroke?r.scale/.055:1],children:(0,X.jsx)(`meshStandardMaterial`,{color:e.color,metalness:.15,roughness:.5,emissive:e.color,emissiveIntensity:t?.32:.08,side:2})},n))})})})})}var St=(0,U.memo)(function({tech:e,index:t,count:n,active:r}){let i=t/n*Math.PI*2,a=[Math.cos(i)*4.2,1.1,Math.sin(i)*4.2];return(0,X.jsxs)(`group`,{children:[(0,X.jsx)(Je,{points:[[0,.55,0],[a[0],.55,0],[a[0],.55,a[2]],[a[0],1,a[2]]],color:r?e.color:`#376650`,lineWidth:r?2:1}),(0,X.jsxs)(`group`,{position:a,children:[(0,X.jsx)(Q,{size:[1.2,.14,1.2],color:r?e.color:`#2d4b3b`,glow:r?.5:0}),(0,X.jsx)(xt,{source:e.image,active:r}),(0,X.jsx)($,{text:e.name.toUpperCase(),position:[0,1.75,.15],size:.45,color:r?e.color:`#8cac9b`})]})]})});function Ct({technology:e}){return(0,X.jsxs)(`group`,{position:[0,0,-65],children:[(0,X.jsx)(Q,{position:[0,-.12,0],size:[13,.15,13],color:`#0d211c`}),(0,X.jsx)(`gridHelper`,{args:[13,32,`#3d7568`,`#1b3d32`]}),(0,X.jsx)(Q,{position:[0,.2,0],size:[2.7,.35,2.7],color:`#273e2b`}),(0,X.jsx)(Q,{position:[0,.46,0],size:[1.9,.16,1.9],color:`#758e56`,glow:.4}),(0,X.jsx)($,{text:`THE ENGINE / WONKU`,position:[0,3.9,-2],size:1.35,color:`#a4dfd5`}),(0,X.jsx)($,{text:`DESIGN → BUILD → INTERACT`,position:[0,.8,.8],size:.65,color:Z}),a.map((t,n)=>(0,X.jsx)(St,{tech:t,index:n,count:a.length,active:e===n},t.name)),Array.from({length:16},(e,t)=>(0,X.jsx)(Q,{position:[-5.5+t%4*3.7,-.02,-5.5+Math.floor(t/4)*3.7],size:[.06,.06,.06],color:`#b2ebce`,glow:2},t)),(0,X.jsx)(`pointLight`,{position:[0,5,0],color:`#81c6b0`,intensity:35,distance:18})]})}var wt=(0,U.memo)(Ct);function Tt({onReady:e}){return Xe(o),(0,U.useEffect)(()=>{let t=requestAnimationFrame(()=>{t=requestAnimationFrame(e)});return()=>cancelAnimationFrame(t)},[e]),null}function Et(e){let{progress:t,reducedMotion:n,idea:r,technology:a,project:o,award:s,showDestinations:c}=e,l=(0,U.useRef)(null),u=(0,U.useRef)(null),d=(0,U.useRef)(null),f=()=>n?Math.round(t.get()*i):t.get()*i,p=tt(f());return j(()=>{let e=tt(f());l.current&&(l.current.visible=!!(e&1)),u.current&&(u.current.visible=!!(e&2)),d.current&&(d.current.visible=!!(e&4))}),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Tt,{onReady:e.onReady}),(0,X.jsx)($e,{progress:t,reducedMotion:n}),(0,X.jsx)(`ambientLight`,{intensity:1.5}),(0,X.jsx)(`directionalLight`,{position:[5,9,6],intensity:2.8,color:`#e0efcf`}),(0,X.jsxs)(`group`,{ref:l,visible:!!(p&1),children:[(0,X.jsx)(pt,{project:o,award:s}),c&&(0,X.jsx)(et,{...e})]}),(0,X.jsx)(`group`,{ref:u,visible:!!(p&2),children:(0,X.jsx)(vt,{idea:r})}),(0,X.jsx)(`group`,{ref:d,visible:!!(p&4),children:(0,X.jsx)(wt,{technology:a})})]})}function Dt(e){return(0,X.jsxs)(V,{camera:{position:[7.8,4.2,9.8],fov:43,near:.06,far:140},frameloop:`demand`,dpr:[1,1.5],gl:{antialias:!0,alpha:!1,powerPreference:`low-power`},fallback:(0,X.jsx)(`div`,{className:`journey-scene-fallback`}),children:[(0,X.jsx)(`color`,{attach:`background`,args:[`#0b120f`]}),(0,X.jsx)(`fog`,{attach:`fog`,args:[`#0b120f`,10,34]}),(0,X.jsx)(U.Suspense,{fallback:null,children:(0,X.jsx)(Et,{...e})})]})}export{Dt as default};