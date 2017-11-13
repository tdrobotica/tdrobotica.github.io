/**
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

var demo1 = '<xml xmlns="http://www.w3.org/1999/xhtml"> <variables> <variable type="" id="6sjI{6irf7zg6:s|o502">i</variable> </variables> <block type="inout_tone" id="yEjki])XIPn)Hp/GDjyc" x="37" y="37"> <field name="PIN">10</field> <value name="NUM"> <block type="math_number" id="d9on+KP;*|+26=$ihKOj"> <field name="NUM">440</field> </block> </value> <next> <block type="inout_digital_write" id="y@Wrn=s1Uy:2-RX=i{y3"> <field name="PIN">3</field> <field name="STAT">HIGH</field> <next> <block type="base_delay" id="E4!){55XEL*C7}/6,lAV"> <value name="DELAY_TIME"> <block type="math_number" id="{G4B8H:)/:5$A{9)/uMN"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_digital_write" id=";Uc@{B1F#B.^L)F$|`JR"> <field name="PIN">3</field> <field name="STAT">LOW</field> <next> <block type="inout_notone" id="/^Iv$S|=`jOkG4QX2bv+"> <field name="PIN">10</field> <next> <block type="base_delay" id="=c-?hpY_ewCt]mvJ7B6i"> <value name="DELAY_TIME"> <block type="math_number" id="=E6H6}!Hti:1bPaoIB@L"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_digital_write" id="=CPru8Q}gT^HWL:*k$S5"> <field name="PIN">2</field> <field name="STAT">HIGH</field> <next> <block type="base_delay" id="1xg)rD|Xntq9ls5nCDe4"> <value name="DELAY_TIME"> <block type="math_number" id="%@+-ktRf(9f-;E0|BaD,"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_digital_write" id="BI`i[V%YI/+$+.JFf.wb"> <field name="PIN">2</field> <field name="STAT">LOW</field> <next> <block type="base_delay" id="|y#1vQ!i(qY5=f2+GXyw"> <value name="DELAY_TIME"> <block type="math_number" id="Pxmb}]b:qv$N*muz?T*A"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_digital_write" id="i|kDg*x[`*#bym:zSekZ"> <field name="PIN">5</field> <field name="STAT">HIGH</field> <next> <block type="base_delay" id="ZLHu?@mUp*.KnWw+c6Fi"> <value name="DELAY_TIME"> <block type="math_number" id="QUEW];ta:Pu#6y`an~)T"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_digital_write" id="XDFH_D(MUkU4)oM{VZMJ"> <field name="PIN">5</field> <field name="STAT">LOW</field> <next> <block type="base_delay" id="~Gjh.=}su:HE=6=*c5*Q"> <value name="DELAY_TIME"> <block type="math_number" id="2UkH_5y{+/tS;!Prf:|a"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_digital_write" id="Zg!F(NI(lbbw)^WKOMG-"> <field name="PIN">4</field> <field name="STAT">HIGH</field> <next> <block type="base_delay" id="PsKXi,n8d/XnRHu~(-n~"> <value name="DELAY_TIME"> <block type="math_number" id="X/cm__0s5t{EjdFC==+S"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_digital_write" id="zD(g|9EmkFY9W=i/A|:~"> <field name="PIN">4</field> <field name="STAT">LOW</field> <next> <block type="base_delay" id="4:5c~qf1OQYu2HkWt0O="> <value name="DELAY_TIME"> <block type="math_number" id="^@c[z^s+IzjQB6AK#0er"> <field name="NUM">100</field> </block> </value> <next> <block type="inout_tone" id="`BEi7A_3rs|o.6*-F[m;"> <field name="PIN">10</field> <value name="NUM"> <block type="math_number" id="@jc]-TqAkvn5j`@8_Tl~"> <field name="NUM">2500</field> </block> </value> <next> <block type="base_delay" id="J[xFUrANg|ulvr/Yn1T["> <value name="DELAY_TIME"> <block type="math_number" id="iD;m.pcSg]DpJ{4-Kd#V"> <field name="NUM">300</field> </block> </value> <next> <block type="inout_notone" id="d+X#5D6`HrnB^QaK(*[s"> <field name="PIN">10</field> <next> <block type="base_delay" id="kQrs!~,1gH$@a;/^@RhC"> <value name="DELAY_TIME"> <block type="math_number" id=":x,rMcLF8U2ilvJf@55C"> <field name="NUM">100</field> </block> </value> <next> <block type="led_rgb" id="P}T(pQiWsKYrf]MZ/x1w"> <field name="PIN">6</field> <field name="COLOR">#ffcc33</field> <next> <block type="base_delay" id=".SP({}oku0kl-DKL^3;y"> <value name="DELAY_TIME"> <block type="math_number" id="#|bC/1)4lU!qpaLu;C[,"> <field name="NUM">500</field> </block> </value> <next> <block type="led_rgb" id="Vq7El7hl(=]x07~Z2l5Z"> <field name="PIN">6</field> <field name="COLOR">#000099</field> <next> <block type="base_delay" id="ki+]!E+Y+OGW~$J:t.Gy"> <value name="DELAY_TIME"> <block type="math_number" id=")#DfYgsm`:X+R-FBbG@7"> <field name="NUM">500</field> </block> </value> <next> <block type="led_rgb" id="9d`nBC{o!O$TZ9=NPg*1"> <field name="PIN">6</field> <field name="COLOR">#ff0000</field> <next> <block type="base_delay" id="^Dfg}FrO/vq2_mEBCoM;"> <value name="DELAY_TIME"> <block type="math_number" id="xxcvV~O7DP5Cw1QF,#gD"> <field name="NUM">500</field> </block> </value> <next> <block type="led_rgb" id="O4LRuKfg}WhXJE%Q{t5z"> <field name="PIN">6</field> <field name="COLOR">#000000</field> <next> <block type="base_delay" id="ge9;S$$Q%oLhj_V[vapk"> <value name="DELAY_TIME"> <block type="math_number" id="@0lAaV3ocm;M%{Y`fpea"> <field name="NUM">300</field> </block> </value> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </xml>';
var demo2 = '<xml xmlns="http://www.w3.org/1999/xhtml"> <variables></variables> <block type="controls_if" id=":OU,z1`wTNOV)d!CO73m" x="63" y="63"> <mutation else="1"></mutation> <value name="IF0"> <block type="logic_operation" id="PW}!IJ.+X:Ai+o%;UYT;"> <field name="OP">AND</field> <value name="A"> <block type="logic_compare" id="oY@nHW3*2d%*e!BBl+*c"> <field name="OP">EQ</field> <value name="A"> <block type="inout_digital_read" id="Qdr}zqF3m^gV_pg2V/Wp"> <field name="PIN">8</field> </block> </value> <value name="B"> <block type="inout_highlow" id="Z2@FiK1;P7T1qbR?~NtT"> <field name="BOOL">HIGH</field> </block> </value> </block> </value> <value name="B"> <block type="logic_compare" id="~oUUc*}v04BoSp3ggsCT"> <field name="OP">EQ</field> <value name="A"> <block type="inout_digital_read" id="yf[X0FM:{;(6^B4/^=S["> <field name="PIN">9</field> </block> </value> <value name="B"> <block type="inout_highlow" id="RxbOhd?Xb67qe4Z%LI~U"> <field name="BOOL">LOW</field> </block> </value> </block> </value> </block> </value> <statement name="DO0"> <block type="led_rgb" id="?2N-`30ZR2jnO2/wQd_o"> <field name="PIN">6</field> <field name="COLOR">#ffcc33</field> <next> <block type="base_delay" id="V05e20}#Uh0Q*2y9csi-"> <value name="DELAY_TIME"> <block type="math_number" id="-^fMCFjzl:wDVKD!)Y-z"> <field name="NUM">3000</field> </block> </value> </block> </next> </block> </statement> <statement name="ELSE"> <block type="led_rgb" id="9JPWjzW!vg:k@Y:Ug$CU"> <field name="PIN">6</field> <field name="COLOR">#000000</field> </block> </statement> </block> <block type="controls_if" id="e;Z6fYP/]APMS,-;t2kO" x="63" y="313"> <mutation else="1"></mutation> <value name="IF0"> <block type="logic_operation" id="z+l7Ju(nBg:D6e#Rr|RR"> <field name="OP">AND</field> <value name="A"> <block type="logic_compare" id="UAM@31vI7R11d8S-/Do?"> <field name="OP">EQ</field> <value name="A"> <block type="inout_digital_read" id=":@+994/{VoRO:0Q[:0zM"> <field name="PIN">9</field> </block> </value> <value name="B"> <block type="inout_highlow" id="Mxfj-|XlF8(qxY]}/d=g"> <field name="BOOL">HIGH</field> </block> </value> </block> </value> <value name="B"> <block type="logic_negate" id="SEdCRj5+/b,yzuoOTaEm"> <value name="BOOL"> <block type="logic_compare" id="[;]@1:|)!oyWFZe!NBp-"> <field name="OP">EQ</field> <value name="A"> <block type="inout_digital_read" id="N@(~YMI`{2;pVYUQsXY5"> <field name="PIN">8</field> </block> </value> <value name="B"> <block type="inout_highlow" id=";xNT2,vyv9V883H/6Lzm"> <field name="BOOL">HIGH</field> </block> </value> </block> </value> </block> </value> </block> </value> <statement name="DO0"> <block type="led_rgb" id="qub/{^#Gc:osgl1:W=%!"> <field name="PIN">6</field> <field name="COLOR">#000099</field> <next> <block type="base_delay" id="g#d(GRL=Vq1`_6T4C{Yz"> <value name="DELAY_TIME"> <block type="math_number" id="!G1awOi@2vrRVu5u]wAG"> <field name="NUM">3000</field> </block> </value> </block> </next> </block> </statement> <statement name="ELSE"> <block type="led_rgb" id="i]9^,Fh+L=Ty?!S$BoLE"> <field name="PIN">6</field> <field name="COLOR">#000000</field> </block> </statement> </block> <block type="controls_if" id="|)$W%V8*CeB|d,E]?Ob)" x="63" y="563"> <mutation else="1"></mutation> <value name="IF0"> <block type="logic_operation" id="BubLuIKJ`aO^|bSA!+eG"> <field name="OP">AND</field> <value name="A"> <block type="logic_compare" id="Ipoq4XL_UWnQMR_lN/_e"> <field name="OP">EQ</field> <value name="A"> <block type="inout_digital_read" id="^68[ZH0Yjs39D!n]_O2e"> <field name="PIN">8</field> </block> </value> <value name="B"> <block type="inout_highlow" id="rU|m@iFQ2nkT,cgJPs$w"> <field name="BOOL">HIGH</field> </block> </value> </block> </value> <value name="B"> <block type="logic_compare" id="SO^L7R8inN0`v8.|AtXl"> <field name="OP">EQ</field> <value name="A"> <block type="inout_digital_read" id="eSMU}]7$E^fqvQ^.,.kt"> <field name="PIN">9</field> </block> </value> <value name="B"> <block type="inout_highlow" id="mRhe2uMLUOZJ-CQwSzi="> <field name="BOOL">HIGH</field> </block> </value> </block> </value> </block> </value> <statement name="DO0"> <block type="led_rgb" id="FEIGNvcVvG57?}Gp]Q$K"> <field name="PIN">6</field> <field name="COLOR">#006600</field> <next> <block type="base_delay" id="HUGegcYgk!@NtrCkIw?2"> <value name="DELAY_TIME"> <block type="math_number" id="`Gsy9IVQ(^,!0!}A@Y5@"> <field name="NUM">3000</field> </block> </value> </block> </next> </block> </statement> <statement name="ELSE"> <block type="led_rgb" id="mX?!asj.=I[z_VnL-)`["> <field name="PIN">6</field> <field name="COLOR">#000000</field> </block> </statement> </block> </xml>';
var demo3 = '<xml xmlns="http://www.w3.org/1999/xhtml"> <variables></variables> <block type="controls_whileUntil" id="^u*j[]M:x[lqOi?-j_%G" x="138" y="213"> <field name="MODE">WHILE</field> <value name="BOOL"> <block type="logic_compare" id="F$l#W/X,Qwsq[LC-#D-P"> <field name="OP">GTE</field> <value name="A"> <block type="inout_analog_read" id="LRsft%fLexWudij3:lv/"> <field name="PIN">A0</field> </block> </value> <value name="B"> <block type="math_number" id="@d4(co/GU2S:^T@|BcVV"> <field name="NUM">600</field> </block> </value> </block> </value> <statement name="DO"> <block type="inout_tone" id="?0+TNrV9]C_erjZU_=|4"> <field name="PIN">10</field> <value name="NUM"> <block type="base_map" id="t@_S{kUt3%FDJ07|PxW#"> <value name="NUM"> <block type="inout_analog_read" id="qqed-P^N4)Y*dd7=;*,A"> <field name="PIN">A0</field> </block> </value> <value name="DMAX"> <block type="math_number" id="Q^4kPJP9#Rykwm7r)#oc"> <field name="NUM">5000</field> </block> </value> </block> </value> <next> <block type="led_rgb" id="hiKloPi,$:HTfnyVsj$1"> <field name="PIN">6</field> <field name="COLOR">#cc0000</field> <next> <block type="base_delay" id="Fqt},4ph8kAkW~X;H(w`"> <value name="DELAY_TIME"> <block type="math_number" id="F4t*IX2vNN_6()4Y/pYp"> <field name="NUM">2000</field> </block> </value> <next> <block type="inout_notone" id="wCMGfcW,v}+Hnk].PSJh"> <field name="PIN">10</field> <next> <block type="led_rgb" id="tk=CCQ1^qo%QX96;,5FD"> <field name="PIN">6</field> <field name="COLOR">#000000</field> <next> <block type="base_delay" id="ioPchz2QocuT(eU?V*/v"> <value name="DELAY_TIME"> <block type="math_number" id="u^v=0dXr/bB~h1{7#[5/"> <field name="NUM">1000</field> </block> </value> </block> </next> </block> </next> </block> </next> </block> </next> </block> </next> </block> </statement> </block> </xml>';
var demo4 = '<xml xmlns="http://www.w3.org/1999/xhtml"> <variables></variables> <block type="serial_print" id="Ca2nP)=oyYGRk7GKeY_R" x="88" y="88"> <value name="CONTENT"> <block type="inout_analog_read" id="?Y|TQTIn!Hkv}qD%pJwx"> <field name="PIN">A3</field> </block> </value> <next> <block type="controls_if" id=".|on_Rd@jUpuP_|ITi7v"> <mutation else="1"></mutation> <value name="IF0"> <block type="logic_compare" id="GnKBMk6z`|ms(4rTjIGv"> <field name="OP">LT</field> <value name="A"> <block type="inout_analog_read" id="}50#7vK,s1j)]TV3/9BT"> <field name="PIN">A3</field> </block> </value> <value name="B"> <block type="math_number" id="J+kn;w+X~~$B1:7F3aHt"> <field name="NUM">8</field> </block> </value> </block> </value> <statement name="DO0"> <block type="led_rgb" id="V9K!c6i=J8L(Byd1m12e"> <field name="PIN">6</field> <field name="COLOR">#ff6600</field> <next> <block type="base_delay" id="GBI5Mdd~z+-M#[L)ILVV"> <value name="DELAY_TIME"> <block type="math_number" id="+aqxO.@*5_CRKNDUb!Y0"> <field name="NUM">2000</field> </block> </value> </block> </next> </block> </statement> <statement name="ELSE"> <block type="led_rgb" id="^p(p^44t}h6V^d(@t382"> <field name="PIN">6</field> <field name="COLOR">#000000</field> </block> </statement> </block> </next> </block> </xml>';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
  'en': 'English',
  'es': 'Español',
  'fr': 'Français'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang = Code.getStringParamFromUrl('lang', 'en');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'en';
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch(e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // This should be skipped for the index page, which has no blocks and does
  // not load Blockly.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (typeof Blockly != 'undefined' && window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function(el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
  el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
  document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks','atom','xml'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function(clickedName) {
  // If the XML tab was open, save and render the content.
  if (document.getElementById('tab_xml').className == 'tabon') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlText = xmlTextarea.value;
    var xmlDom = null;
    try {
      xmlDom = Blockly.Xml.textToDom(xmlText);
    } catch (e) {
      var q =
          window.confirm(MSG['badXml'].replace('%1', e));
      if (!q) {
        // Leave the user on the XML tab.
        return;
      }
    }
    if (xmlDom) {
      Code.workspace.clear();
      Blockly.Xml.domToWorkspace(xmlDom, Code.workspace);
    }
  }

  if (document.getElementById('tab_blocks').className == 'tabon') {
    Code.workspace.setVisible(false);
  }
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    document.getElementById('tab_' + name).className = 'taboff';
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  Code.selected = clickedName;
  document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
      'visible';
  Code.renderContent();
  if (clickedName == 'blocks') {
    Code.workspace.setVisible(true);
  }
  Blockly.svgResize(Code.workspace);
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function() {
  var content = document.getElementById('content_' + Code.selected);
  // Initialize the pane.
  if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
  } else if (content.id == 'content_javascript') {
    var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, 'js');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_python') {
    code = Blockly.Python.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, 'py');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_atom') {
    code = Blockly.Atom.workspaceToCode(Code.workspace);
    content.textContent = code;
  }
};

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function() {
  //Code.initLanguage();

  var rtl = Code.isRtl();
  var container = document.getElementById('content_area');
  var onresize = function(e) {
    var bBox = Code.getBBox_(container);
    for (var i = 0; i < Code.TABS_.length; i++) {
      var el = document.getElementById('content_' + Code.TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Code.workspace && Code.workspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
          (Code.workspace.toolbox_.width - 38) + 'px';
          // Account for the 19 pixel margin and on each side.
    }
  };
  window.addEventListener('resize', onresize, false);

  // The toolbox XML specifies each category name using Blockly's messaging
  // format (eg. `<category name="%{BKY_CATLOGIC}">`).
  // These message keys need to be defined in `Blockly.Msg` in order to
  // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
  // been defined for each language to import each category name message
  // into `Blockly.Msg`.
  // TODO: Clean up the message files so this is done explicitly instead of
  // through this for-loop.
  for (var messageKey in MSG) {
    if (goog.string.startsWith(messageKey, 'cat')) {
      Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
    }
  }

  // Construct the toolbox XML.
  var toolboxText = document.getElementById('toolbox').outerHTML;
  var toolboxXml = Blockly.Xml.textToDom(toolboxText);

  Code.workspace = Blockly.inject('content_blocks',
      {grid:false, 
       media: 'media/',
       rtl: rtl,
       toolbox: toolboxXml,
       css: true,
       zoom:
           {controls: false,
            wheel: false}
      });

  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.
  //Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

  Code.loadBlocks('');

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  Code.tabClick(Code.selected);

  Code.bindClick('trashButton',
      function() {Code.discard(); Code.renderContent();});

  Code.bindClick('exampleOneButton',
    function() {
      Code.workspace.clear();
      var xml = demo1;
      Code.loadBlocks(xml);
    }
  );

  Code.bindClick('exampleTwoButton',
    function() {
      Code.workspace.clear();
      var xml = demo2;
      Code.loadBlocks(xml);
    }
  );

  Code.bindClick('exampleThreeButton',
    function() {
      Code.workspace.clear();
      var xml = demo3;
      Code.loadBlocks(xml);
    }
  );

  Code.bindClick('exampleFourButton',
  function() {
    Code.workspace.clear();
    var xml = demo4;
    Code.loadBlocks(xml);
  }
);


  //Code.bindClick('runButton', Code.runJS);
  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] = MSG['httpRequestError'];
    BlocklyStorage['LINK_ALERT'] = MSG['linkAlert'];
    BlocklyStorage['HASH_ERROR'] = MSG['hashError'];
    BlocklyStorage['XML_ERROR'] = MSG['xmlError'];
    Code.bindClick(linkButton,
        function() {BlocklyStorage.link(Code.workspace);});
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    Code.bindClick('tab_' + name,
        function(name_) {return function() {Code.tabClick(name_);};}(name));
  }
  onresize();
  Blockly.svgResize(Code.workspace);

  // Lazy-load the syntax-highlighting.
  window.setTimeout(Code.importPrettify, 1);
};

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  //document.title += ' ' + MSG['title'];
  //document.getElementById('title').textContent = MSG['title'];
  document.getElementById('tab_blocks').textContent = MSG['blocks'];

  //document.getElementById('linkButton').title = MSG['linkTooltip'];
  //document.getElementById('runButton').title = MSG['runTooltip'];
  //document.getElementById('trashButton').title = MSG['trashTooltip'];
};

/**
 * Execute the user's code.
 * Just a quick and dirty eval.  Catch infinite loops.
 */
Code.runJS = function() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
  var timeouts = 0;
  var checkTimeout = function() {
    if (timeouts++ > 1000000) {
      throw MSG['timeout'];
    }
  };
  var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function() { 
  var count = Code.workspace.getAllBlocks().length;
  if (count < 2 ||
      window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
    Code.workspace.clear();
    if (window.location.hash) {
      window.location.hash = '';
    }
  }
};


// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="msg/js/' + Code.LANG + '.js"></script>\n');

window.addEventListener('load', Code.init);
