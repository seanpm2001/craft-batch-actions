(()=>{"use strict";var t={222:(t,e,s)=>{s.r(e)},186:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.NeoBatchActionBar=e.MatrixBatchActionBar=e.BatchActionBar=void 0;const s=(t,e,s,i=!1)=>({label:t,icon:e,condition:s,initialState:i});class i{constructor(t,e){this.input=t,this.settings=e,this._$buttons={},this.$bar=$('<div class="batch-action-bar"/>').prependTo(t.$container),this._initSelect(),this._initButtons(),this._initMenu();const s=this.$bar.add(this.$menu);this.actions().forEach((t=>{const e=t.label.toLowerCase();this._$buttons[e]=s.find(`[data-bba-bn="button.${e}"]`),this._$buttons[e].on("activate",(t=>{t.preventDefault();const s=this[e];"function"==typeof s&&(s.bind(this)(),this.refreshButtons())}))})),this.refreshButtons(),this.registerEventListeners()}actions(){return[s("Expand","expand",this.isBlockCollapsed.bind(this)),s("Collapse","collapse",this.isBlockExpanded.bind(this)),s("Enable","enabled",this.isBlockDisabled.bind(this)),s("Disable","disabled",this.isBlockEnabled.bind(this)),s("Delete","remove",(t=>this.getSelectedBlocks().length>0))]}supportedActions(){return this.actions().map((t=>[t.label,t.icon,t.condition]))}isBlockCollapsed(t){return void 0!==t&&!this.isBlockExpanded(t)}isBlockDisabled(t){return void 0!==t&&!this.isBlockEnabled(t)}_initSelect(){this.$selectContainer=$("<div/>",{class:"batch-action-bar_select",role:"checkbox",tabindex:0,"aria-label":Craft.t("batch-actions","Select all"),"aria-checked":"false"}).appendTo(this.$bar),this.$select=$('<div class="checkbox">').appendTo(this.$selectContainer);let t=!1,e=!1;const s=s=>{e||(this.input.on(this.settings.addBlockEvent,(e=>{var s;const i=null!==(s=e.$block)&&void 0!==s?s:e.block.$container;this.$select.hasClass("checked")&&(t=!0,i.addClass(this.input.blockSelect.settings.selectedClass),this.input.blockSelect.selectItem(i,!1,!0),this.refreshButtons())})),e=!0),t=!0,this.$select.toggleClass("checked").removeClass("indeterminate"),this.$select.hasClass("checked")?(this.input.blockSelect.selectAll(),this.$selectContainer.attr("aria-checked","true")):(this.input.blockSelect.deselectAll(),this.$selectContainer.attr("aria-checked","false"))};this.$selectContainer.on("mousedown",(t=>{t.which===Garnish.PRIMARY_CLICK&&s()})),this.$selectContainer.on("keydown",(t=>{t.keyCode===Garnish.SPACE_KEY&&(t.preventDefault(),s())})),this.input.blockSelect.on("selectionChange",(e=>{if(t)t=!1;else{this.$select.removeClass("checked");const t=this.input.blockSelect.$selectedItems.length>0;this.$select.toggleClass("indeterminate",t),this.$selectContainer.attr("aria-checked",t?"mixed":"false")}this.refreshButtons()}))}refreshButtons(){const t={},e=[];this.actions().forEach((s=>{e.push(s.label),t[s.label]={icon:s.icon,condition:s.condition,enable:s.initialState,initialState:s.initialState}}));const s=s=>{e.forEach((e=>{var i,n;t[e].initialState?(i=t[e]).enable&&(i.enable=t[e].condition(s)):(n=t[e]).enable||(n.enable=t[e].condition(s))}))};s(),this.input.blockSelect.$selectedItems.each(((t,e)=>{s($(e))})),e.forEach((e=>{this._$buttons[e.toLowerCase()].toggleClass("disabled",!t[e].enable)}))}registerEventListeners(){}_initButtons(){this.$buttonsContainer=$('<div class="batch-action-bar_buttons btngroup"/>').appendTo(this.$bar),this.actions().forEach((t=>{this._generateAction(t.label,t.icon,"btn").appendTo(this.$buttonsContainer)}))}_initMenu(){this.$menuContainer=$('<div class="batch-action-bar_menu hidden"/>').appendTo(this.$bar);const t=$('<button type="button" class="btn settings icon menubtn">Actions</button>').appendTo(this.$menuContainer);this.$menu=$('<div class="menu"/>').appendTo(this.$menuContainer);const e=$('<ul class="padded"/>').appendTo(this.$menu);this.actions().forEach((t=>{$("<li/>").append(this._generateAction(t.label,t.icon)).appendTo(e)})),t.menubtn();const s=this.$selectContainer.outerWidth()+2;let i=this.$buttonsContainer.width();const n=()=>{i||(i=this.$buttonsContainer.width());const t=this.$bar.width()-s<i;this.$buttonsContainer.toggleClass("hidden",t),this.$menuContainer.toggleClass("hidden",!t)};n(),this.$bar.on("resize",n)}_generateAction(t,e,s){const i=void 0!==s,n=t.toLowerCase();null!=e||(e=n);const o=$(`<${i?"button":"a"}/>`).attr({"aria-label":t,"data-bba-bn":`button.${n}`,"data-icon":e}).text(Craft.t("batch-actions",t));return i&&o.addClass(s),o}expand(){this.getSelectedBlocks().forEach((t=>t.expand()))}collapse(){this.getSelectedBlocks().forEach((t=>t.collapse()))}}e.BatchActionBar=i,e.MatrixBatchActionBar=class extends i{constructor(t){super(t,{addBlockEvent:"blockAdded"}),this.input=t,this._smithMenu=null,this._$dummyBlock=null}actions(){return void 0===Craft.Smith?super.actions():(null!==this._smithMenu&&void 0!==this._smithMenu||(this._$dummyBlock=$("<div/>",{class:"hidden",data:{block:{$actionMenu:$()}}}).prependTo(this.input.$blockContainer),this._smithMenu=new Craft.Smith.Menu(this.input.$container,this._$dummyBlock,$())),super.actions().concat([s("Copy","field",(t=>this.getSelectedBlocks().length>0)),s("Paste","brush",(t=>{var e,s,i;return null===(e=this._smithMenu)||void 0===e||e.checkPaste(),!(null===(i=null===(s=this._smithMenu)||void 0===s?void 0:s.$pasteBtn.hasClass("disabled"))||void 0===i||i)}),!0)]))}registerEventListeners(){const t=t=>{t.actionDisclosure.on("hide",(()=>this.refreshButtons()))};this.input.blockSelect.$items.each(((e,s)=>t($(s).data("block")))),this.input.on(this.settings.addBlockEvent,(e=>{setTimeout((()=>{var s;return t(null===(s=e.$block)||void 0===s?void 0:s.data("block"))}),250)}))}isBlockExpanded(t){return void 0!==t&&!t.hasClass("collapsed")}isBlockEnabled(t){return void 0!==t&&!t.hasClass("disabled")}getSelectedBlocks(){return this.input.blockSelect.$selectedItems.map(((t,e)=>$(e).data("block"))).get()}enable(){this.getSelectedBlocks().forEach((t=>t.enable()))}disable(){this.getSelectedBlocks().forEach((t=>t.disable()))}delete(){window.confirm(Craft.t("batch-actions","Are you sure you want to delete the selected blocks?"))&&this.getSelectedBlocks().forEach((t=>t.selfDestruct()))}copy(){var t;this._ensureSmithInstalled("copy"),this.getSelectedBlocks().length>0&&(null===(t=this._smithMenu)||void 0===t||t.copyBlock())}paste(){var t;this._ensureSmithInstalled("paste"),null===(t=this._smithMenu)||void 0===t||t.pasteBlock()}_ensureSmithInstalled(t){if(void 0===Craft.Smith)throw new Error(`Tried to ${t} Matrix blocks but Smith isn't installed.`)}},e.NeoBatchActionBar=class extends i{constructor(t){super(t,{addBlockEvent:"addBlock"}),this.input=t}actions(){return void 0===this.input.getCopiedBlocks?super.actions():super.actions().concat([s("Copy","field",(t=>this.getSelectedBlocks().length>0)),s("Paste","brush",(t=>{const e=this.input.getCopiedBlocks();if(0===e.length)return!1;const s=e[0].level,i=this.input.getBlockTypes(!0).map((t=>t.getId())),n=e.filter((t=>t.level===s&&i.includes(t.type))).length;if(0===n)return!1;const o=this.input.getMaxTopBlocks();if(null!==o&&o>0&&n+this.input.getBlocks(1).length>o)return!1;const a=this.input.getMaxBlocks();return!(null!==a&&a>0&&e.length+this.input.getBlocks().length>a)}),!0)])}registerEventListeners(){const t=t=>{t.on("copyBlock toggleExpansion toggleEnabled",(()=>this.refreshButtons()))};this.input.getBlocks().forEach(t),this.input.on(this.settings.addBlockEvent,(e=>{this.refreshButtons(),t(e.block)})),this.input.on("removeBlock",(()=>this.refreshButtons()))}isBlockExpanded(t){var e;return null!==(e=null==t?void 0:t.hasClass("is-expanded"))&&void 0!==e&&e}isBlockCollapsed(t){return void 0!==t&&!this.isBlockExpanded(t)}isBlockEnabled(t){var e;return null!==(e=null==t?void 0:t.hasClass("is-enabled"))&&void 0!==e&&e}getSelectedBlocks(){return this.input.getBlocks().filter((t=>t.isSelected()))}enable(){var t;null===(t=this.getSelectedBlocks().find((t=>!t.isEnabled())))||void 0===t||t.enable()}disable(){var t;null===(t=this.getSelectedBlocks().find((t=>t.isEnabled())))||void 0===t||t.disable()}delete(){window.confirm(Craft.t("batch-actions","Are you sure you want to delete the selected blocks?"))&&this.getSelectedBlocks().forEach((t=>this.input.removeBlock(t)))}copy(){const t=this.getSelectedBlocks();t.length>0&&this.input["@copyBlock"]({block:t[0]})}paste(){this.input["@pasteBlock"]({})}}}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=s(186);s(222);const e=[],i=[];let n=!1,o={barsDisallowedFields:[]};window.BatchActions={initBars:t=>{o=t,i.forEach((t=>t())),n=!0},bars:()=>Array.from(e)},void 0!==Craft.MatrixInput&&Garnish.on(Craft.MatrixInput,"afterInit",(s=>{const a=s.target.$container.closest("[data-type=craft\\\\fields\\\\Matrix]").data("attribute"),l=()=>{o.barsDisallowedFields.includes(a)||e.push(new t.MatrixBatchActionBar(s.target))};n?l():i.push(l)})),"undefined"!=typeof Neo&&void 0!==Neo.Input&&Garnish.on(Neo.Input,"afterInit",(s=>{if(void 0!==s.target.blockSelect&&!s.target.$container.hasClass("is-static")){const a=s.target.getName(),l=()=>{o.barsDisallowedFields.includes(a)||e.push(new t.NeoBatchActionBar(s.target))};n?l():i.push(l)}}))})()})();
//# sourceMappingURL=bars.js.map