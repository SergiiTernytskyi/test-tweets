"use strict";(self.webpackChunktest_tweets=self.webpackChunktest_tweets||[]).push([[826],{6460:function(n,t,e){e.r(t),e.d(t,{default:function(){return mn}});var r,i,a,o,l,s=e(9439),p=e(2791),c=e(9434),x=e(6907),f=e(1763),u=function(n){return n.users.follow},d=function(n){return n.users.isLoading},h=function(n){return n.users.error},A=e(9128),b=e(168),w=e(1087),g=e(6444),m=(0,g.ZP)(w.rU)(r||(r=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 24px;\n  text-decoration: none;\n\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: #471ca9;\n\n  transform: scale(1);\n  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n  }\n"]))),U=e(3329),j=function(n){var t=n.children;return(0,U.jsxs)(m,{to:"/",children:[(0,U.jsx)(A.jTe,{size:"24"}),t]})},q=e(6916),V=e(2330),E=(0,q.P1)([function(n){return n.users.users},function(n){return n.filter.status},u],(function(n,t,e){switch(t){case V.H.follow:return n.filter((function(n){return!e.includes(n.id)}));case V.H.followings:return n.filter((function(n){return e.includes(n.id)}));default:return n}})),Z=function(n){return Number(n).toLocaleString("en")},P=e(9053),K=g.ZP.button(i||(i=(0,b.Z)(["\n  width: 198px;\n  height: 50px;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  text-transform: uppercase;\n  color: #373737;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  border: transparent;\n\n  transform: scale(1);\n\n  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n  }\n\n  &.following {\n    transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n    background: #5cd3a8;\n  }\n"]))),v=function(n){var t=n.onClick,e=n.follow;return(0,U.jsx)(K,{type:"button",onClick:t,className:e?"following":null,children:e?"following":"follow"})},N=g.ZP.div(a||(a=(0,b.Z)(["\n  position: absolute;\n  top: 178px;\n  left: 0;\n\n  width: 380px;\n  height: 80px;\n\n  &::after {\n    content: '';\n\n    position: absolute;\n    top: 36px;\n    left: 0;\n\n    width: 380px;\n    height: 8px;\n\n    background: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),B=g.ZP.div(o||(o=(0,b.Z)(["\n  position: absolute;\n  top: 0;\n  left: 150px;\n  z-index: 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),Q=g.ZP.img(l||(l=(0,b.Z)(["\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n"]))),T=function(n){var t=n.avatar;return(0,U.jsx)(N,{children:(0,U.jsx)(B,{children:(0,U.jsx)(Q,{src:t||"data:image/jpeg;base64,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",alt:"user avatar"})})})},S=e.p+"static/media/heroPicture.86562350dcaa714a1442.png";var W,z,O,F,R,y,L,k,C,G,X,J,H,D,M=e.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",Y=g.ZP.article(W||(W=(0,b.Z)(["\n  position: relative;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 380px;\n  height: 460px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),I=g.ZP.img(z||(z=(0,b.Z)(["\n  width: 76px;\n  height: 22px;\n"]))),_=g.ZP.img(O||(O=(0,b.Z)(["\n  position: absolute;\n  top: 28px;\n  left: 36px;\n\n  width: 308px;\n  height: 168px;\n"]))),$=g.ZP.div(F||(F=(0,b.Z)(["\n  text-align: center;\n"]))),nn=g.ZP.div(R||(R=(0,b.Z)(["\n  margin-bottom: 26px;\n"]))),tn=g.ZP.p(y||(y=(0,b.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: #ebd8ff;\n\n  :first-child {\n    margin-bottom: 16px;\n  }\n"]))),en=function(n){var t=n.userTweets,e=t.id,r=t.followers,i=t.tweets,a=t.avatar,o=(0,c.v9)(u),l=(0,c.I0)();return(0,U.jsxs)(Y,{children:[(0,U.jsx)(I,{src:M,alt:"company logo"}),(0,U.jsx)(_,{src:S,alt:"main"}),(0,U.jsx)(T,{avatar:a}),(0,U.jsxs)($,{children:[(0,U.jsxs)(nn,{children:[(0,U.jsxs)(tn,{children:[Z(i)," Tweets"]}),(0,U.jsxs)(tn,{children:[Z(r)," Followers"]})]}),(0,U.jsx)(v,{onClick:function(){l((0,P.Wi)(e))},follow:function(n){return o.includes(n)}(e)})]})]})},rn=g.ZP.ul(L||(L=(0,b.Z)(["\n  margin-bottom: 32px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 380px);\n  gap: 14px;\n"]))),an=function(){var n=(0,c.v9)(E);return(0,U.jsx)(rn,{children:n.map((function(n){return(0,U.jsx)("li",{children:(0,U.jsx)(en,{userTweets:n})},n.id)}))})},on=g.ZP.div(k||(k=(0,b.Z)(["\n  text-align: center;\n  width: 500px;\n  margin: 0 auto;\n"]))),ln=g.ZP.img(C||(C=(0,b.Z)(["\n  width: 200px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n"]))),sn=g.ZP.p(G||(G=(0,b.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.2;\n  color: #ea4f16;\n"]))),pn=e.p+"static/media/error.f25de1c8ed3462683887.png",cn=function(n){var t=n.children;return(0,U.jsxs)(on,{children:[(0,U.jsx)(ln,{src:pn,alt:"error"}),(0,U.jsx)(sn,{children:t})]})},xn=g.ZP.button(X||(X=(0,b.Z)(["\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 32px;\n  width: 198px;\n  height: 50px;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  text-transform: uppercase;\n  color: #373737;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: transparent;\n\n  transform: scale(1);\n  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    background: #5cd3a8;\n  }\n"]))),fn=function(n){var t=n.children,e=n.onClick;return(0,U.jsx)(xn,{type:"button",onClick:e,children:t})},un=e(4637),dn=g.ZP.div(J||(J=(0,b.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),hn=function(){return(0,U.jsx)(dn,{children:(0,U.jsx)(un.Z,{color:"#471ca9",loading:!0,size:80,speedMultiplier:2})})},An=e(1273),bn=g.ZP.div(H||(H=(0,b.Z)(["\n  position: relative;\n  display: block;\n\n  align-items: center;\n  position: relative;\n  align-items: center;\n\n  width: 200px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n"]))),wn=g.ZP.select(D||(D=(0,b.Z)(["\n  padding: 8px 16px;\n\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  height: 40px;\n  border-bottom: 2px solid #471ca9;\n\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.22;\n  color: #471ca9;\n\n  cursor: inherit;\n  outline: none;\n  z-index: 1;\n"]))),gn=function(){var n=(0,c.I0)();return(0,p.useEffect)((function(){return function(){n((0,An.T)("all"))}}),[n]),(0,U.jsx)(bn,{children:(0,U.jsxs)(wn,{id:"select",name:"tweetsForm",onChange:function(t){return e=t.target.value,n((0,An.T)(e));var e},children:[(0,U.jsx)("option",{value:"all",children:"Show all"}),(0,U.jsx)("option",{value:"follow",children:"Follow"}),(0,U.jsx)("option",{value:"followings",children:"Followings"})]})})},mn=function(){var n=(0,p.useState)(1),t=(0,s.Z)(n,2),e=t[0],r=t[1],i=(0,c.v9)(h),a=(0,c.v9)(d),o=(0,c.I0)();(0,p.useEffect)((function(){o((0,f.fetchUsers)({page:e,limit:3}))}),[o,e]);return(0,U.jsxs)(x.B6,{children:[(0,U.jsx)(x.ql,{children:(0,U.jsx)("title",{children:"Tweets - TweetsBook"})}),(0,U.jsxs)("main",{children:[(0,U.jsx)(j,{children:"Go back"}),(0,U.jsx)(gn,{}),i&&(0,U.jsx)(cn,{children:i}),!i&&a&&(0,U.jsx)(hn,{}),!i&&!a&&(0,U.jsx)(an,{}),!i&&!a&&(0,U.jsx)(fn,{onClick:function(){r((function(n){return n+1}))},children:"Load More"})]})]})}}}]);
//# sourceMappingURL=826.793f69b5.chunk.js.map