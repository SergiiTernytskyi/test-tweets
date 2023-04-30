"use strict";(self.webpackChunktest_tweets=self.webpackChunktest_tweets||[]).push([[936],{2985:function(n,t,e){e.r(t),e.d(t,{default:function(){return gn}});var r,i,a,o,l,p=e(9439),s=e(2791),c=e(9434),x=e(6907),f=e(1763),d=function(n){return n.users.isLoading},u=function(n){return n.users.error},h=e(9128),A=e(168),w=e(1087),b=e(6444),g=(0,b.ZP)(w.rU)(r||(r=(0,A.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 24px;\n  text-decoration: none;\n\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: #471ca9;\n\n  transform: scale(1);\n  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n  }\n"]))),m=e(184),U=function(n){var t=n.children;return(0,m.jsxs)(g,{to:"/",children:[(0,m.jsx)(h.jTe,{size:"24"}),t]})},j=e(6916),q=e(2330),V=(0,j.P1)([function(n){return n.users.users},function(n){return n.filter.status}],(function(n,t){switch(t){case q.H.follow:return n.filter((function(n){return!n.follow}));case q.H.followings:return n.filter((function(n){return n.follow}));default:return n}})),E=function(n){return Number(n).toLocaleString("en")},Z=e(9053),v=b.ZP.button(i||(i=(0,A.Z)(["\n  width: 198px;\n  height: 50px;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  text-transform: uppercase;\n  color: #373737;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  border: transparent;\n\n  transform: scale(1);\n\n  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n  }\n\n  &.following {\n    transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n    background: #5cd3a8;\n  }\n"]))),P=function(n){var t=n.onClick,e=n.activeFollow;return(0,m.jsx)(v,{type:"button",onClick:t,className:e?"following":null,children:e?"following":"follow"})},K=b.ZP.div(a||(a=(0,A.Z)(["\n  position: absolute;\n  top: 178px;\n  left: 0;\n\n  width: 380px;\n  height: 80px;\n\n  &::after {\n    content: '';\n\n    position: absolute;\n    top: 36px;\n    left: 0;\n\n    width: 380px;\n    height: 8px;\n\n    background: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),N=b.ZP.div(o||(o=(0,A.Z)(["\n  position: absolute;\n  top: 0;\n  left: 150px;\n  z-index: 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),B=b.ZP.img(l||(l=(0,A.Z)(["\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n"]))),Q=function(n){var t=n.avatar;return(0,m.jsx)(K,{children:(0,m.jsx)(N,{children:(0,m.jsx)(B,{src:t||"data:image/jpeg;base64,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",alt:"user avatar"})})})},S=e.p+"static/media/heroPicture.86562350dcaa714a1442.png";var T,F,O,W,z,R,y,L,k,C,G,X,J,H,D=e.p+"static/media/Logo.e917114d7945c04c85a8946a331d28b6.svg",M=b.ZP.article(T||(T=(0,A.Z)(["\n  position: relative;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 380px;\n  height: 460px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),Y=b.ZP.img(F||(F=(0,A.Z)(["\n  width: 76px;\n  height: 22px;\n"]))),I=b.ZP.img(O||(O=(0,A.Z)(["\n  position: absolute;\n  top: 28px;\n  left: 36px;\n\n  width: 308px;\n  height: 168px;\n"]))),_=b.ZP.div(W||(W=(0,A.Z)(["\n  text-align: center;\n"]))),$=b.ZP.div(z||(z=(0,A.Z)(["\n  margin-bottom: 26px;\n"]))),nn=b.ZP.p(R||(R=(0,A.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: #ebd8ff;\n\n  :first-child {\n    margin-bottom: 16px;\n  }\n"]))),tn=function(n){var t=n.userTweets,e=t.id,r=t.followers,i=t.tweets,a=t.avatar,o=t.follow,l=void 0!==o&&o,p=(0,c.I0)();return(0,m.jsxs)(M,{children:[(0,m.jsx)(Y,{src:D,alt:"company logo"}),(0,m.jsx)(I,{src:S,alt:"main"}),(0,m.jsx)(Q,{avatar:a}),(0,m.jsxs)(_,{children:[(0,m.jsxs)($,{children:[(0,m.jsxs)(nn,{children:[E(i)," Tweets"]}),(0,m.jsxs)(nn,{children:[E(r)," Followers"]})]}),(0,m.jsx)(P,{onClick:function(){p((0,Z.Wi)({userId:e,followers:l?r-1:r+1}))},activeFollow:l})]})]})},en=b.ZP.ul(y||(y=(0,A.Z)(["\n  margin-bottom: 32px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 380px);\n  gap: 14px;\n"]))),rn=function(){var n=(0,c.v9)(V);return(0,m.jsx)(en,{children:n.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(tn,{userTweets:n})},n.id)}))})},an=b.ZP.div(L||(L=(0,A.Z)(["\n  text-align: center;\n  width: 500px;\n  margin: 0 auto;\n"]))),on=b.ZP.img(k||(k=(0,A.Z)(["\n  width: 200px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n"]))),ln=b.ZP.p(C||(C=(0,A.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.2;\n  color: #ea4f16;\n"]))),pn=e.p+"static/media/error.f25de1c8ed3462683887.png",sn=function(n){var t=n.children;return(0,m.jsxs)(an,{children:[(0,m.jsx)(on,{src:pn,alt:"error"}),(0,m.jsx)(ln,{children:t})]})},cn=b.ZP.button(G||(G=(0,A.Z)(["\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 32px;\n  width: 198px;\n  height: 50px;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  text-transform: uppercase;\n  color: #373737;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: transparent;\n\n  transform: scale(1);\n  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    background: #5cd3a8;\n  }\n"]))),xn=function(n){var t=n.children,e=n.onClick;return(0,m.jsx)(cn,{type:"button",onClick:e,children:t})},fn=e(4637),dn=b.ZP.div(X||(X=(0,A.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),un=function(){return(0,m.jsx)(dn,{children:(0,m.jsx)(fn.Z,{color:"#471ca9",loading:!0,size:80,speedMultiplier:2})})},hn=b.ZP.div(J||(J=(0,A.Z)(["\n  position: relative;\n  display: block;\n\n  align-items: center;\n  position: relative;\n  align-items: center;\n\n  width: 200px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n"]))),An=b.ZP.select(H||(H=(0,A.Z)(["\n  padding: 8px 16px;\n\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  height: 40px;\n  border-bottom: 2px solid #471ca9;\n\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.22;\n  color: #471ca9;\n\n  cursor: inherit;\n  outline: none;\n  z-index: 1;\n"]))),wn=e(1273),bn=function(){var n=(0,c.I0)();return(0,s.useEffect)((function(){return function(){n((0,wn.T)("all"))}}),[n]),(0,m.jsx)(hn,{children:(0,m.jsxs)(An,{id:"select",name:"tweetsForm",onChange:function(t){return e=t.target.value,n((0,wn.T)(e));var e},children:[(0,m.jsx)("option",{value:"all",children:"Show all"}),(0,m.jsx)("option",{value:"follow",children:"Follow"}),(0,m.jsx)("option",{value:"followings",children:"Followings"})]})})},gn=function(){var n=(0,s.useState)(parseInt(localStorage.getItem("page"))||1),t=(0,p.Z)(n,2),e=t[0],r=t[1],i=(0,c.v9)(u),a=(0,c.v9)(d),o=(0,c.I0)();(0,s.useEffect)((function(){o((0,f.fetchUsers)({page:e,limit:3}))}),[o,e]);return(0,m.jsxs)(x.B6,{children:[(0,m.jsx)(x.ql,{children:(0,m.jsx)("title",{children:"Tweets - TweetsBook"})}),(0,m.jsxs)("main",{children:[(0,m.jsx)(U,{children:"Go back"}),(0,m.jsx)(bn,{}),i&&(0,m.jsx)(sn,{children:i}),!i&&a&&(0,m.jsx)(un,{}),!i&&!a&&(0,m.jsx)(rn,{}),!i&&!a&&(0,m.jsx)(xn,{onClick:function(){r((function(n){return n+1})),localStorage.setItem("page",JSON.stringify(e+1))},children:"Load More"})]})]})}}}]);
//# sourceMappingURL=936.ecc16b50.chunk.js.map