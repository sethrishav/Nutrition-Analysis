(this["webpackJsonpnutrition-analysis-edamam"]=this["webpackJsonpnutrition-analysis-edamam"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var i=a(1),s=a.n(i),n=a(3),l=a.n(n),r=(a(12),a(4)),c=a(5),o=a(7),u=a(6),d=(a(13),a(0)),j=function(t){var e=t.typing;return Object(d.jsx)("p",{id:"textArea",children:Object(d.jsx)("textarea",{id:"demoAnalysis",cols:"30",rows:"10",placeholder:"eg.1 cup rice\n1 dosa",onChange:e})})},h=function(t){var e=t.analyze,a=t.newRecipe,i=t.data;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"btn btn-success btn-sm m-2",onClick:e,children:"Analyze"}),i?Object(d.jsx)("button",{className:"btn btn-success btn-sm m-2",onClick:a,children:"New recipe"}):""]})},b=function(t){var e=t.s_no,a=t.item,i=t.i,s=t.inputs;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:e}),Object(d.jsx)("td",{children:s[i]}),Object(d.jsxs)("td",{children:[Math.round(a.calories)," kcal"]}),Object(d.jsxs)("td",{children:[a.totalWeight.toFixed(1)," g"]})]})},m=function(t){var e=t.data,a=t.inputs,i=0;return Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"S.no"}),Object(d.jsx)("th",{children:"Item"}),Object(d.jsx)("th",{children:"Calories"}),Object(d.jsx)("th",{children:"Weight"})]})}),Object(d.jsx)("tbody",{children:e.map((function(t,e){if(!t.error)return i++,Object(d.jsx)(b,{s_no:i,item:t,i:e,inputs:a},e)}))})]})},O=function(t){console.log(t);var e={Calories:0,totalNutrients:{Total_Fat:"",Sat_Fat:"",Trans_Fat:"",Cholesterol:"",Sodium:"",Total_Carbs:"",Dietary_Fiber:"",Total_Sugars:"",Protein:"",Vitamin_D:"",Calcium:"",Iron:"",Potassium:""},daily_value:{Total_Fat:"",Sat_Fat:"",Cholesterol:"",Sodium:"",Total_Carbs:"",Dietary_Fiber:"",Protein:"",Vitamin_D:"",Calcium:"",Iron:"",Potassium:""},units:{Total_Fat:"",Sat_Fat:"",Trans_Fat:"",Cholesterol:"",Sodium:"",Total_Carbs:"",Dietary_Fiber:"",Total_Sugars:"",Protein:"",Vitamin_D:"",Calcium:"",Iron:"",Potassium:""}};for(var a in t.forEach((function(t){if(!t.error){var a=t.totalNutrients,i=t.totalDaily;e.Calories+=t.calories,e.totalNutrients.Total_Fat=+e.totalNutrients.Total_Fat+ +(a.FAT?a.FAT.quantity:""),e.totalNutrients.Sat_Fat=+e.totalNutrients.Sat_Fat+ +(a.FASAT?a.FASAT.quantity:""),e.totalNutrients.Trans_Fat=+e.totalNutrients.Trans_Fat+ +(a.FATRN?a.FATRN.quantity:""),e.totalNutrients.Cholesterol=+e.totalNutrients.Cholesterol+ +(a.CHOLE?a.CHOLE.quantity:""),e.totalNutrients.Sodium=+e.totalNutrients.Sodium+ +(a.NA?a.NA.quantity:""),e.totalNutrients.Total_Carbs=+e.totalNutrients.Total_Carbs+ +(a.CHOCDF?a.CHOCDF.quantity:""),e.totalNutrients.Dietary_Fiber=+e.totalNutrients.Dietary_Fiber+ +(a.FIBTG?a.FIBTG.quantity:""),e.totalNutrients.Total_Sugars=+e.totalNutrients.Total_Sugars+ +(a.SUGAR?a.SUGAR.quantity:""),e.totalNutrients.Protein=+e.totalNutrients.Protein+ +(a.PROCNT?a.PROCNT.quantity:""),e.totalNutrients.Vitamin_D=+e.totalNutrients.Vitamin_D+ +(a.VITD?a.VITD.quantity:""),e.totalNutrients.Calcium=+e.totalNutrients.Calcium+ +(a.CA?a.CA.quantity:""),e.totalNutrients.Iron=+e.totalNutrients.Iron+ +(a.FE?a.FE.quantity:""),e.totalNutrients.Potassium=+e.totalNutrients.Potassium+ +(a.K?a.K.quantity:""),e.daily_value.Total_Fat=+e.daily_value.Total_Fat+ +(i.FAT?i.FAT.quantity:""),e.daily_value.Sat_Fat=+e.daily_value.Sat_Fat+ +(i.FASAT?i.FASAT.quantity:""),e.daily_value.Cholesterol=+e.daily_value.Cholesterol+ +(i.CHOLE?i.CHOLE.quantity:""),e.daily_value.Sodium=+e.daily_value.Sodium+ +(i.NA?i.NA.quantity:""),e.daily_value.Total_Carbs=+e.daily_value.Total_Carbs+ +(i.CHOCDF?i.CHOCDF.quantity:""),e.daily_value.Dietary_Fiber=+e.daily_value.Dietary_Fiber+ +(i.FIBTG?i.FIBTG.quantity:""),e.daily_value.Protein=+e.daily_value.Protein+ +(i.PROCNT?i.PROCNT.quantity:""),e.daily_value.Vitamin_D=+e.daily_value.Vitamin_D+ +(i.VITD?i.VITD.quantity:""),e.daily_value.Calcium=+e.daily_value.Calcium+ +(i.CA?i.CA.quantity:""),e.daily_value.Iron=+e.daily_value.Iron+ +(i.FE?i.FE.quantity:""),e.daily_value.Potassium=+e.daily_value.Potassium+ +(i.K?i.K.quantity:""),e.units.Total_Fat=a.FAT?a.FAT.unit:e.units.Total_Fat,e.units.Sat_Fat=a.FASAT?a.FASAT.unit:e.units.Sat_Fat,e.units.Trans_Fat=a.FATRN?a.FATRN.unit:e.units.Trans_Fat,e.units.Cholesterol=a.CHOLE?a.CHOLE.unit:e.units.Cholesterol,e.units.Sodium=a.NA?a.NA.unit:e.units.Sodium,e.units.Total_Carbs=a.CHOCDF?a.CHOCDF.unit:e.units.Total_Carbs,e.units.Dietary_Fiber=a.FIBTG?a.FIBTG.unit:e.units.Dietary_Fiber,e.units.Total_Sugars=a.SUGAR?a.SUGAR.unit:e.units.Total_Sugars,e.units.Protein=a.PROCNT?a.PROCNT.unit:e.units.Protein,e.units.Vitamin_D=a.VITD?a.VITD.unit:e.units.Vitamin_D,e.units.Calcium=a.CA?a.CA.unit:e.units.Calcium,e.units.Iron=a.FE?a.FE.unit:e.units.Iron,e.units.Potassium=a.K?a.K.unit:e.units.Potassium}})),e.Calories=Math.round(e.Calories),e.totalNutrients)""===e.totalNutrients[a]?a="-":e.totalNutrients[a]=(0===e.totalNutrients[a]?0:e.totalNutrients[a].toFixed(1))+" "+e.units[a];for(var i in e.daily_value)""===e.daily_value[i]?e.daily_value[i]="-":e.daily_value[i]=Math.round(e.daily_value[i])+" %";return e},_=function(t){var e=t.data,a=O(e);return Object(d.jsxs)("section",{id:"factCard",children:[Object(d.jsx)("p",{className:"h2 m-0 pt-3",id:"factTitle",children:"Nutrition Facts"}),Object(d.jsxs)("table",{id:"factTable",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{className:"text-start",children:"Amount Per Serving"})})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"calories text-start",children:"Calories"}),Object(d.jsx)("td",{className:"fw-bold",children:a.Calories})]}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{className:"small-info thickBorder text-end fw-bold",colSpan:"3",children:"% Daily Value*"})}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems fw-bold",children:["Total Fat ",a.totalNutrients.Total_Fat]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Total_Fat})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Saturated Fat ",a.totalNutrients.Sat_Fat]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Sat_Fat})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Trans Fat ",a.totalNutrients.Trans_Fat]}),Object(d.jsx)("td",{className:"factPercentage"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems fw-bold",children:["Cholesterol ",a.totalNutrients.Cholesterol]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Cholesterol})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems fw-bold",children:["Sodium ",a.totalNutrients.Sodium]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Sodium})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems fw-bold",children:["Total Carbohydrate ",a.totalNutrients.Total_Carbs]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Total_Carbs})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Dietary Fiber ",a.totalNutrients.Dietary_Fiber]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Dietary_Fiber})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Total Sugars ",a.totalNutrients.Total_Sugars]}),Object(d.jsx)("td",{className:"factPercentage"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"factItems",children:"Includes - Added Sugars"}),Object(d.jsx)("td",{className:"factPercentage"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems fw-bold",children:["Protein ",a.totalNutrients.Protein]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Protein})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Vitamin D ",a.totalNutrients.Vitamin_D]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Vitamin_D})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Calcium ",a.totalNutrients.Calcium]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Calcium})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Iron ",a.totalNutrients.Iron]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Iron})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{className:"factItems",children:["Potassium ",a.totalNutrients.Potassium]}),Object(d.jsx)("td",{className:"factPercentage",children:a.daily_value.Potassium})]})]})]}),Object(d.jsx)("p",{className:"small-info mt-3",children:"*Percent Daily Values are based on a 2000 calorie diet"})]})},N=function(){return Object(d.jsx)("div",{className:"error text-danger mt-1",children:"We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantities for the ingredients."})},x=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).typing=function(e){t.input=e.target.value},t.analyze=function(){t.input_arr=t.input.split("\n"),t.error=void 0,t.fetchData()},t.newRecipe=function(t){window.location.reload()},t.app_id="e83d474d",t.app_key="37dae24dde9c2156b9c790f5c6e74906",t.input="",t.input_arr=[],t.error=void 0,t.state={data:void 0},t}return Object(c.a)(a,[{key:"fetchData",value:function(){var t=this;Promise.all(this.input_arr.map((function(e){return fetch("https://api.edamam.com/api/nutrition-data?app_id=".concat(t.app_id,"&app_key=").concat(t.app_key,"&ingr=").concat(e)).then((function(t){return t.json()})).then((function(e){return t.error=t.error?"bad_request":e.error,e})).catch((function(t){alert(t),window.location.reload()}))}))).then((function(e){e[0]&&t.setState({data:e})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"container col-lg-9 col-xl-8",id:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-md-12 bg-white ",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsx)("h1",{className:"text-center title",children:"Nutrition Analysis API Demo"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"text-center col-md-12",children:[Object(d.jsxs)("p",{className:"notes",children:["Enter an ingredient list list for what you are cooking, like ",Object(d.jsx)("span",{className:"text-success",children:'"1 cup rice, 1 dosa"'}),", ect.",Object(d.jsx)("br",{}),"Enter each ingredient on a new line."]}),Object(d.jsxs)("div",{className:"col-12 col-sm-7 ",id:"leftArea",children:[Object(d.jsx)(j,{typing:this.typing}),Object(d.jsx)(h,{analyze:this.analyze,newRecipe:this.newRecipe,data:this.state.data}),this.error?Object(d.jsx)(N,{}):"",Object(d.jsx)("div",{className:"demo-results",children:Object(d.jsx)("div",{className:"col-12",children:this.state.data?Object(d.jsx)(m,{data:this.state.data,inputs:this.input_arr}):""})})]}),Object(d.jsx)("div",{id:"rightArea",className:"col-12 col-sm-5 ",children:Object(d.jsx)("div",{className:"fact-container",children:this.state.data?Object(d.jsx)(_,{data:this.state.data}):""})})]})})]})})})})}}]),a}(i.Component),y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,i=e.getFID,s=e.getFCP,n=e.getLCP,l=e.getTTFB;a(t),i(t),s(t),n(t),l(t)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.f91d0b56.chunk.js.map