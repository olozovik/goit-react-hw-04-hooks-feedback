(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{22:function(e,t,n){"use strict";n.r(t);var r,a,c=n(1),o=n.n(c),i=n(5),s=n.n(i),d=(n(17),n(6)),b=n(7),l=n(8),u=n(11),j=n(10),h=n(2),p=n(3),g=p.a.div(r||(r=Object(h.a)(["\n  & button {\n    padding: 2px 10px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n    background-color: transparent;\n    cursor: pointer;\n    transition: background-color 150ms linear;\n\n    &:hover,\n    &:focus {\n      background-color: rgba(94, 152, 247, 1);\n      border-color: transparent;\n      outline: none;\n    }\n\n    &:not(:last-child) {\n      margin-right: 5px;\n    }\n  }\n"]))),x=n(0);function O(e){var t=e.options,n=e.onLeaveFeedback;return Object(x.jsx)(g,{children:t.map((function(e){var t=e.replace(e[0],e[0].toUpperCase());return Object(x.jsx)("button",{onClick:function(){return n(e)},children:t},e)}))})}function v(e){var t=e.good,n=e.neutral,r=e.bad,a=e.total,c=e.positivePercentage;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:["Good: ",Object(x.jsx)("span",{children:t})]}),Object(x.jsxs)("p",{children:["Neutral: ",Object(x.jsx)("span",{children:n})]}),Object(x.jsxs)("p",{children:["Bad: ",Object(x.jsx)("span",{children:r})]}),Object(x.jsxs)("p",{children:["Total: ",Object(x.jsx)("span",{children:a})]}),Object(x.jsxs)("p",{children:["Positive feedback: ",Object(x.jsxs)("span",{children:[c,"%"]})]})]})}var k=p.a.section(a||(a=Object(h.a)(["\n  padding: 10px 40px;\n"])));function f(e){var t=e.title,n=e.children;return Object(x.jsxs)(k,{children:[Object(x.jsx)("h2",{children:t}),n]})}function y(e){var t=e.message;return Object(x.jsx)("p",{children:t})}var F=["good","neutral","bad"],m=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(d.a)({},t,e[t]+1)}))},e.getQuantityByType=function(t){return e.state[t]},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good;return Math.round(n/t*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.onLeaveFeedback,t=this.countTotalFeedback,n=this.getQuantityByType,r=this.countPositiveFeedbackPercentage;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f,{title:"Please leave feedback",children:Object(x.jsx)(O,{options:F,onLeaveFeedback:e})}),Object(x.jsx)(f,{title:"Statistics",children:t()>0?Object(x.jsx)(v,{good:n("good"),neutral:n("neutral"),bad:n("bad"),total:t(),positivePercentage:r()}):Object(x.jsx)(y,{message:"No feedback given"})})]})}}]),n}(c.Component);s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.45eef96f.chunk.js.map