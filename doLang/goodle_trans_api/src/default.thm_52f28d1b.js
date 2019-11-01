window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "upAndSelected";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png"),
					new eui.SetProperty("labelDisplay","visible",false)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.visible = false;
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/bag/BagViewSkin.exml'] = window.BagViewSkin = (function (_super) {
	__extends(BagViewSkin, _super);
	function BagViewSkin() {
		_super.call(this);
		this.skinParts = ["bag_bg","bag_title","bag_line","friend_close","btn_1","btn_2","label_1","label_2","bag_title2"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BagViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bag_bg_i(),this.bag_title_i(),this.bag_line_i(),this.friend_close_i(),this.btn_1_i(),this.btn_2_i(),this.label_1_i(),this.label_2_i(),this.bag_title2_i()];
		return t;
	};
	_proto.bag_bg_i = function () {
		var t = new eui.Image();
		this.bag_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -427;
		t.left = 0;
		t.right = 0;
		t.source = "bag_bg_png";
		t.top = -355;
		return t;
	};
	_proto.bag_title_i = function () {
		var t = new eui.Image();
		this.bag_title = t;
		t.height = 87;
		t.horizontalCenter = 0;
		t.source = "bag_title_png";
		t.top = 2;
		t.width = 402;
		return t;
	};
	_proto.bag_line_i = function () {
		var t = new eui.Image();
		this.bag_line = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 4.03;
		t.horizontalCenter = -1.5;
		t.source = "bag_line_png";
		t.top = 236;
		t.width = 747.03;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.right = 3;
		t.source = "friend_close_png";
		t.top = 0;
		t.width = 56;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Image();
		this.btn_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.21;
		t.horizontalCenter = -239;
		t.source = "friend_btn2_png";
		t.top = 172;
		t.width = 157.85;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Image();
		this.btn_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.7;
		t.horizontalCenter = -53;
		t.source = "friend_btn2_png";
		t.top = 174;
		t.width = 163.91;
		return t;
	};
	_proto.label_1_i = function () {
		var t = new eui.Label();
		this.label_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.15;
		t.horizontalCenter = -237;
		t.size = 30;
		t.text = "道具";
		t.textAlign = "center";
		t.top = 182;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 110;
		return t;
	};
	_proto.label_2_i = function () {
		var t = new eui.Label();
		this.label_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.15;
		t.horizontalCenter = -53;
		t.size = 30;
		t.text = "合成";
		t.textAlign = "center";
		t.top = 183;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 110;
		return t;
	};
	_proto.bag_title2_i = function () {
		var t = new eui.Image();
		this.bag_title2 = t;
		t.height = 66;
		t.source = "bag_title2_png";
		t.width = 131;
		t.x = 294.04;
		t.y = 13.24;
		return t;
	};
	return BagViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/chuyou/ChuYouFuiSkin.exml'] = window.ChuYouFuiSkin = (function (_super) {
	__extends(ChuYouFuiSkin, _super);
	function ChuYouFuiSkin() {
		_super.call(this);
		this.skinParts = ["chuyou_tishi1","friend_close","chuyou_tishi2","chuyou_get","chuyou_huifuling"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ChuYouFuiSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.chuyou_tishi1_i(),this.friend_close_i(),this.chuyou_tishi2_i(),this._Label1_i(),this.chuyou_get_i(),this.chuyou_huifuling_i(),this._Label2_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.fillColor = 0x444444;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.chuyou_tishi1_i = function () {
		var t = new eui.Image();
		this.chuyou_tishi1 = t;
		t.height = 507;
		t.horizontalCenter = 0.5;
		t.source = "chuyou_tishi1_png";
		t.verticalCenter = 0.5;
		t.width = 693;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.horizontalCenter = 319;
		t.source = "friend_close_png";
		t.verticalCenter = -199;
		t.width = 56;
		return t;
	};
	_proto.chuyou_tishi2_i = function () {
		var t = new eui.Image();
		this.chuyou_tishi2 = t;
		t.height = 101;
		t.horizontalCenter = 108.5;
		t.source = "chuyou_tishi2_png";
		t.verticalCenter = -174.5;
		t.width = 365;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.horizontalCenter = 109;
		t.size = 30;
		t.text = "恢复令不足";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -174;
		t.width = 190;
		return t;
	};
	_proto.chuyou_get_i = function () {
		var t = new eui.Image();
		this.chuyou_get = t;
		t.height = 86;
		t.horizontalCenter = -5;
		t.source = "chuyou_get_png";
		t.verticalCenter = -68;
		t.width = 86;
		return t;
	};
	_proto.chuyou_huifuling_i = function () {
		var t = new eui.Image();
		this.chuyou_huifuling = t;
		t.height = 81;
		t.horizontalCenter = -2;
		t.source = "chuyou_huifuling_png";
		t.verticalCenter = -65.5;
		t.width = 86;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.66;
		t.horizontalCenter = -7;
		t.size = 26;
		t.text = "恢复令";
		t.textAlign = "center";
		t.textColor = 0xdd7171;
		t.verticalAlign = "middle";
		t.verticalCenter = -9.5;
		t.width = 92;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 50;
		t.horizontalCenter = 5;
		t.source = "chuyou_tiao_png";
		t.verticalCenter = 48;
		t.width = 613.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 50;
		t.horizontalCenter = 6;
		t.source = "chuyou_tiao2_png";
		t.verticalCenter = 185;
		t.width = 613.67;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 50;
		t.horizontalCenter = 5;
		t.source = "chuyou_tiao2_png";
		t.verticalCenter = 117;
		t.width = 613.67;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.03;
		t.horizontalCenter = -16;
		t.size = 26;
		t.text = "通关剧情【1-9】解锁";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 49.5;
		t.width = 499.76;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.horizontalCenter = -239;
		t.size = 26;
		t.text = "商城";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.verticalAlign = "middle";
		t.verticalCenter = 119.5;
		t.width = 76.12;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.horizontalCenter = -239;
		t.size = 26;
		t.text = "游历";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.verticalAlign = "middle";
		t.verticalCenter = 187.5;
		t.width = 76.12;
		return t;
	};
	return ChuYouFuiSkin;
})(eui.Skin);generateEUI.paths['resource/skins/chuyou/ChuYouGetSkin.exml'] = window.ChuYouGetSkin = (function (_super) {
	__extends(ChuYouGetSkin, _super);
	function ChuYouGetSkin() {
		_super.call(this);
		this.skinParts = ["chuyou_tishi1","friend_close"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ChuYouGetSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.chuyou_tishi1_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.friend_close_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.fillColor = 0x444444;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.chuyou_tishi1_i = function () {
		var t = new eui.Image();
		this.chuyou_tishi1 = t;
		t.anchorOffsetY = 0;
		t.height = 407;
		t.horizontalCenter = 0.5;
		t.source = "chuyou_tishi1_png";
		t.verticalCenter = 0.5;
		t.width = 693;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 86;
		t.horizontalCenter = -3;
		t.source = "chuyou_get_png";
		t.verticalCenter = -3;
		t.width = 86;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.01;
		t.horizontalCenter = -3;
		t.source = "mainview_yinbi_png";
		t.verticalCenter = -5;
		t.width = 48;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 12.5;
		t.size = 20;
		t.text = "2000";
		t.verticalCenter = 24;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -0.5;
		t.size = 20;
		t.stroke = 1;
		t.text = "银币*2000";
		t.textColor = 0xdd7171;
		t.verticalCenter = 58;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 44;
		t.horizontalCenter = 0.5;
		t.source = "friend_btn1_png";
		t.verticalCenter = 119;
		t.width = 123;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.33;
		t.horizontalCenter = -2.5;
		t.size = 26;
		t.text = "继续";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 118.5;
		t.width = 90.67;
		return t;
	};
	return ChuYouGetSkin;
})(eui.Skin);generateEUI.paths['resource/skins/chuyou/ChuYouTiShiSkin.exml'] = window.ChuYouTiShiSkin = (function (_super) {
	__extends(ChuYouTiShiSkin, _super);
	function ChuYouTiShiSkin() {
		_super.call(this);
		this.skinParts = ["chuyou_tishi1","friend_close","chuyou_tishi2"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ChuYouTiShiSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.chuyou_tishi1_i(),this.friend_close_i(),this.chuyou_tishi2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.fillColor = 0x444444;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.chuyou_tishi1_i = function () {
		var t = new eui.Image();
		this.chuyou_tishi1 = t;
		t.height = 507;
		t.horizontalCenter = 0.5;
		t.source = "chuyou_tishi1_png";
		t.verticalCenter = 0.5;
		t.width = 693;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.horizontalCenter = 319;
		t.source = "friend_close_png";
		t.verticalCenter = -199;
		t.width = 56;
		return t;
	};
	_proto.chuyou_tishi2_i = function () {
		var t = new eui.Image();
		this.chuyou_tishi2 = t;
		t.height = 101;
		t.horizontalCenter = 108.5;
		t.source = "chuyou_tishi2_png";
		t.verticalCenter = -174.5;
		t.width = 365;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.horizontalCenter = 101;
		t.size = 30;
		t.text = "帮助";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -173;
		t.width = 120;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.horizontalCenter = 22;
		t.size = 22;
		t.text = "1.内务打理分为“珍品义卖”、“药园打理”、“雪燕补气”三种。";
		t.textColor = 0xdd7171;
		t.verticalCenter = -40;
		t.width = 610;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 22;
		t.lineSpacing = 8;
		t.size = 22;
		t.text = "5.每当获取过一种资源时，该内务会进入冷却状态，恢复冷却需要恢复令，获得的资源越多，需要消耗的恢复令越多。";
		t.textColor = 0xdd7171;
		t.verticalCenter = 143;
		t.width = 610;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.horizontalCenter = 22;
		t.size = 22;
		t.text = "4.雪燕补气可获得药草资源，交际属性越高，收益越高。";
		t.textColor = 0xdd7171;
		t.verticalCenter = 88;
		t.width = 610;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.horizontalCenter = 22;
		t.size = 22;
		t.text = "3.药园打理可获得药草资源，交际属性越高，收益越高。";
		t.textColor = 0xdd7171;
		t.verticalCenter = 44;
		t.width = 610;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.horizontalCenter = 22;
		t.size = 22;
		t.text = "2.珍品义卖可获得银两资源，才华属性越高，收益越高。";
		t.textColor = 0xdd7171;
		t.verticalCenter = -1;
		t.width = 610;
		return t;
	};
	return ChuYouTiShiSkin;
})(eui.Skin);generateEUI.paths['resource/skins/chuyou/ChuYouViewSkin.exml'] = window.ChuYouViewSkin = (function (_super) {
	__extends(ChuYouViewSkin, _super);
	function ChuYouViewSkin() {
		_super.call(this);
		this.skinParts = ["mainview_bg","chuyou_huigong","mainview_kuang","mainview_tiao","mainview_tou","label_name","label_shili","label_chenghao","mainview_aixin","mainview_jinbi","mainview_yinbi","label_aixin","label_jinbi","label_yinbi","chuyou_item1","chuyou_item2","chuyou_item3","chuyou_item4","chuyou_item5","chuyou_item6"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ChuYouViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.mainview_bg_i(),this.chuyou_huigong_i(),this.mainview_kuang_i(),this.mainview_tiao_i(),this.mainview_tou_i(),this.label_name_i(),this.label_shili_i(),this.label_chenghao_i(),this.mainview_aixin_i(),this.mainview_jinbi_i(),this.mainview_yinbi_i(),this.label_aixin_i(),this.label_jinbi_i(),this.label_yinbi_i(),this.chuyou_item1_i(),this.chuyou_item2_i(),this.chuyou_item3_i(),this.chuyou_item4_i(),this.chuyou_item5_i(),this.chuyou_item6_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto.mainview_bg_i = function () {
		var t = new eui.Image();
		this.mainview_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -390;
		t.left = 0;
		t.right = 0;
		t.source = "chuyou_bg_png";
		t.top = -566;
		return t;
	};
	_proto.chuyou_huigong_i = function () {
		var t = new eui.Image();
		this.chuyou_huigong = t;
		t.bottom = 12;
		t.height = 145;
		t.left = 3;
		t.source = "chuyou_huigong_png";
		t.width = 207;
		return t;
	};
	_proto.mainview_kuang_i = function () {
		var t = new eui.Image();
		this.mainview_kuang = t;
		t.height = 119;
		t.source = "mainview_kuang_png";
		t.width = 303;
		t.x = 14.05;
		t.y = 8.5;
		return t;
	};
	_proto.mainview_tiao_i = function () {
		var t = new eui.Image();
		this.mainview_tiao = t;
		t.height = 61;
		t.source = "mainview_tiao_png";
		t.width = 422;
		t.x = 328;
		t.y = 18;
		return t;
	};
	_proto.mainview_tou_i = function () {
		var t = new eui.Image();
		this.mainview_tou = t;
		t.height = 94;
		t.source = "mainview_tou_png";
		t.width = 68;
		t.x = 30;
		t.y = 10;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 27.04;
		t.size = 24;
		t.text = "精灵雨露";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 124.79;
		t.x = 126.08;
		t.y = 27.52;
		return t;
	};
	_proto.label_shili_i = function () {
		var t = new eui.Label();
		this.label_shili = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 27.04;
		t.size = 20;
		t.text = "势力值：3015";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 206.61;
		t.x = 126.08;
		t.y = 59.44;
		return t;
	};
	_proto.label_chenghao_i = function () {
		var t = new eui.Label();
		this.label_chenghao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 25.53;
		t.size = 20;
		t.text = "侧贵嫔";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 105.09;
		t.x = 16.7;
		t.y = 100.46;
		return t;
	};
	_proto.mainview_aixin_i = function () {
		var t = new eui.Image();
		this.mainview_aixin = t;
		t.height = 27;
		t.source = "mainview_aixin_png";
		t.width = 29;
		t.x = 424.52;
		t.y = 36.52;
		return t;
	};
	_proto.mainview_jinbi_i = function () {
		var t = new eui.Image();
		this.mainview_jinbi = t;
		t.height = 28;
		t.source = "mainview_jinbi_png";
		t.width = 29;
		t.x = 643.98;
		t.y = 38.04;
		return t;
	};
	_proto.mainview_yinbi_i = function () {
		var t = new eui.Image();
		this.mainview_yinbi = t;
		t.height = 28;
		t.source = "mainview_yinbi_png";
		t.width = 29;
		t.x = 534.44;
		t.y = 36.52;
		return t;
	};
	_proto.label_aixin_i = function () {
		var t = new eui.Label();
		this.label_aixin = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimSun";
		t.size = 20;
		t.text = "100";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 51.21;
		t.x = 460.6;
		t.y = 39.56;
		return t;
	};
	_proto.label_jinbi_i = function () {
		var t = new eui.Label();
		this.label_jinbi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimSun";
		t.size = 20;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 57.27;
		t.x = 678.8;
		t.y = 41.08;
		return t;
	};
	_proto.label_yinbi_i = function () {
		var t = new eui.Label();
		this.label_yinbi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 21.52;
		t.size = 20;
		t.text = "100";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 60.3;
		t.x = 571.23;
		t.y = 39.56;
		return t;
	};
	_proto.chuyou_item1_i = function () {
		var t = new eui.Image();
		this.chuyou_item1 = t;
		t.height = 150;
		t.horizontalCenter = 48.5;
		t.source = "chuyou_item_png";
		t.verticalCenter = 322;
		t.width = 55;
		return t;
	};
	_proto.chuyou_item2_i = function () {
		var t = new eui.Image();
		this.chuyou_item2 = t;
		t.height = 150;
		t.left = 107;
		t.source = "chuyou_item_png";
		t.verticalCenter = -192;
		t.width = 55;
		return t;
	};
	_proto.chuyou_item3_i = function () {
		var t = new eui.Image();
		this.chuyou_item3 = t;
		t.height = 150;
		t.right = 63;
		t.source = "chuyou_item_png";
		t.verticalCenter = -163;
		t.width = 55;
		return t;
	};
	_proto.chuyou_item4_i = function () {
		var t = new eui.Image();
		this.chuyou_item4 = t;
		t.height = 150;
		t.horizontalCenter = -6.5;
		t.source = "chuyou_item_png";
		t.verticalCenter = -75;
		t.width = 55;
		return t;
	};
	_proto.chuyou_item5_i = function () {
		var t = new eui.Image();
		this.chuyou_item5 = t;
		t.height = 150;
		t.right = 91;
		t.source = "chuyou_item_png";
		t.verticalCenter = 211;
		t.width = 55;
		return t;
	};
	_proto.chuyou_item6_i = function () {
		var t = new eui.Image();
		this.chuyou_item6 = t;
		t.height = 150;
		t.left = 111;
		t.source = "chuyou_item_png";
		t.verticalCenter = 286;
		t.width = 55;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.left = 114;
		t.size = 26;
		t.text = "太医院";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 267;
		t.width = 44;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.right = 69;
		t.size = 26;
		t.text = "杂役府";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -180;
		t.width = 44;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.left = 111;
		t.size = 26;
		t.text = "长寿殿";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -209;
		t.width = 44;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.horizontalCenter = -9;
		t.size = 26;
		t.text = "御花园";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -88;
		t.width = 44;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.right = 102;
		t.size = 26;
		t.text = "慈宁宫";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 201;
		t.width = 44;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.horizontalCenter = 45;
		t.size = 26;
		t.text = "长阳门";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 297;
		t.width = 44;
		return t;
	};
	return ChuYouViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/chuyou/NeiWuViewSkin.exml'] = window.NeiWuViewSkin = (function (_super) {
	__extends(NeiWuViewSkin, _super);
	function NeiWuViewSkin() {
		_super.call(this);
		this.skinParts = ["bag_bg","bag_title","friend_close","chuyou_neiwu","chuyou_help","chuyou_itemitem","chuyou_item2","chuyou_itembg","label_tishi2","friend_btn1","label_tishi","chuyou_itemitem2","chuyou_item22","chuyou_itembg2","chuyou_itemitem3","chuyou_item23","chuyou_itembg3"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = NeiWuViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bag_bg_i(),this.bag_title_i(),this.friend_close_i(),this.chuyou_neiwu_i(),this.chuyou_help_i(),this.chuyou_itemitem_i(),this.chuyou_item2_i(),this.chuyou_itembg_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.label_tishi2_i(),this.friend_btn1_i(),this.label_tishi_i(),this.chuyou_itemitem2_i(),this.chuyou_item22_i(),this.chuyou_itembg2_i(),this._Label4_i(),this._Label5_i(),this.chuyou_itemitem3_i(),this.chuyou_item23_i(),this.chuyou_itembg3_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto.bag_bg_i = function () {
		var t = new eui.Image();
		this.bag_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -427;
		t.left = 0;
		t.right = 0;
		t.source = "bag_bg_png";
		t.top = -355;
		return t;
	};
	_proto.bag_title_i = function () {
		var t = new eui.Image();
		this.bag_title = t;
		t.height = 87;
		t.horizontalCenter = 0;
		t.source = "bag_title_png";
		t.top = 2;
		t.width = 402;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.right = 3;
		t.source = "friend_close_png";
		t.top = 0;
		t.width = 56;
		return t;
	};
	_proto.chuyou_neiwu_i = function () {
		var t = new eui.Image();
		this.chuyou_neiwu = t;
		t.height = 60;
		t.horizontalCenter = -1.5;
		t.source = "chuyou_neiwu_png";
		t.top = 16;
		t.width = 221;
		return t;
	};
	_proto.chuyou_help_i = function () {
		var t = new eui.Image();
		this.chuyou_help = t;
		t.height = 43;
		t.source = "chuyou_help_png";
		t.width = 44;
		t.x = 21;
		t.y = 13;
		return t;
	};
	_proto.chuyou_itemitem_i = function () {
		var t = new eui.Image();
		this.chuyou_itemitem = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 232.12;
		t.source = "chuyou_itemitem_png";
		t.width = 691.22;
		t.x = 33.75;
		t.y = 127.68;
		return t;
	};
	_proto.chuyou_item2_i = function () {
		var t = new eui.Image();
		this.chuyou_item2 = t;
		t.height = 146;
		t.source = "chuyou_item2_png";
		t.width = 468;
		t.x = 63.56;
		t.y = 192.82;
		return t;
	};
	_proto.chuyou_itembg_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.61;
		t.source = "chuyou_itembg_png";
		t.width = 462.67;
		t.x = 63.84;
		t.y = 140.52;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "珍品义卖 2/3";
		t.x = 75.84;
		t.y = 142.52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "当前才华 ：2";
		t.textColor = 0x020000;
		t.x = 553.4;
		t.y = 208.83;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "预计收益 2000";
		t.textColor = 0xdd7171;
		t.x = 552;
		t.y = 239;
		return t;
	};
	_proto.label_tishi2_i = function () {
		var t = new eui.Label();
		this.label_tishi2 = t;
		t.size = 20;
		t.text = "2小时内恢复";
		t.textColor = 0xdd7171;
		t.x = 552;
		t.y = 318.82;
		return t;
	};
	_proto.friend_btn1_i = function () {
		var t = new eui.Image();
		this.friend_btn1 = t;
		t.height = 44;
		t.source = "friend_btn1_png";
		t.width = 123;
		t.x = 556.48;
		t.y = 269.4;
		return t;
	};
	_proto.label_tishi_i = function () {
		var t = new eui.Label();
		this.label_tishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.55;
		t.size = 26;
		t.text = "恢复";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 76.24;
		t.x = 577.94;
		t.y = 276.4;
		return t;
	};
	_proto.chuyou_itemitem2_i = function () {
		var t = new eui.Image();
		this.chuyou_itemitem2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 232.12;
		t.source = "chuyou_itemitem_png";
		t.width = 691.22;
		t.x = 33.75;
		t.y = 383.73;
		return t;
	};
	_proto.chuyou_item22_i = function () {
		var t = new eui.Image();
		this.chuyou_item22 = t;
		t.height = 146;
		t.source = "chuyou_item2_png";
		t.width = 468;
		t.x = 63.56;
		t.y = 448.87;
		return t;
	};
	_proto.chuyou_itembg2_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.61;
		t.source = "chuyou_itembg_png";
		t.width = 462.67;
		t.x = 63.84;
		t.y = 396.57;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "药园打理 0/3";
		t.x = 75.84;
		t.y = 398.57;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.height = 50.3;
		t.size = 20;
		t.text = "剧情通关2-2解锁";
		t.textAlign = "center";
		t.textColor = 0xdd7171;
		t.verticalAlign = "middle";
		t.x = 543.74;
		t.y = 481.62;
		return t;
	};
	_proto.chuyou_itemitem3_i = function () {
		var t = new eui.Image();
		this.chuyou_itemitem3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 232.12;
		t.source = "chuyou_itemitem_png";
		t.width = 691.22;
		t.x = 33.75;
		t.y = 645.86;
		return t;
	};
	_proto.chuyou_item23_i = function () {
		var t = new eui.Image();
		this.chuyou_item23 = t;
		t.height = 146;
		t.source = "chuyou_item2_png";
		t.width = 468;
		t.x = 63.56;
		t.y = 711;
		return t;
	};
	_proto.chuyou_itembg3_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.61;
		t.source = "chuyou_itembg_png";
		t.width = 462.67;
		t.x = 63.84;
		t.y = 658.7;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "雪燕补气 2/3";
		t.x = 75.84;
		t.y = 660.7;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "剧情通关3-2解锁";
		t.textColor = 0xdd7171;
		t.x = 553.4;
		t.y = 774;
		return t;
	};
	return NeiWuViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/ChatCompSkin.exml'] = window.ChatCompSkin = (function (_super) {
	__extends(ChatCompSkin, _super);
	function ChatCompSkin() {
		_super.call(this);
		this.skinParts = ["chatLab"];
		
		this.height = 108;
		this.width = 348;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ChatCompSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.chatLab_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_liaotian_bottom_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_liaotian_png";
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto.chatLab_i = function () {
		var t = new eui.Label();
		this.chatLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.lineSpacing = 8;
		t.size = 20;
		t.text = "恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜";
		t.width = 261;
		t.x = 56;
		t.y = 13;
		return t;
	};
	return ChatCompSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/VirtualJoystickSkin.exml'] = window.VirtualJoystickSkin = (function (_super) {
	__extends(VirtualJoystickSkin, _super);
	function VirtualJoystickSkin() {
		_super.call(this);
		this.skinParts = ["circle","ball"];
		
		this.height = 147;
		this.width = 147;
		this.elementsContent = [this.circle_i(),this.ball_i()];
	}
	var _proto = VirtualJoystickSkin.prototype;

	_proto.circle_i = function () {
		var t = new eui.Image();
		this.circle = t;
		t.source = "vitural_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ball_i = function () {
		var t = new eui.Image();
		this.ball = t;
		t.source = "vitural_point_png";
		t.x = 54;
		t.y = 54;
		return t;
	};
	return VirtualJoystickSkin;
})(eui.Skin);generateEUI.paths['resource/skins/create/CreateRoleSkin.exml'] = window.CreateRoleSkin = (function (_super) {
	__extends(CreateRoleSkin, _super);
	function CreateRoleSkin() {
		_super.call(this);
		this.skinParts = ["name_text","create_tou","btn_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this.btn_group_i()];
	}
	var _proto = CreateRoleSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "create_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -125.5;
		t.source = "create_role_png";
		t.verticalCenter = 118.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 185.5;
		t.source = "create_jieshao_png";
		t.verticalCenter = -138.5;
		t.width = 199;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 143;
		t.horizontalCenter = 21;
		t.elementsContent = [this._Image4_i(),this.name_text_i(),this.create_tou_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "create_name_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.name_text_i = function () {
		var t = new eui.EditableText();
		this.name_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.prompt = "请输入昵称";
		t.promptColor = 0x494847;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x0c0c0c;
		t.verticalAlign = "middle";
		t.width = 232;
		t.x = 0;
		t.y = 0.67;
		return t;
	};
	_proto.create_tou_i = function () {
		var t = new eui.Image();
		this.create_tou = t;
		t.source = "icon_touzi_png";
		t.x = 233;
		t.y = 4.5;
		return t;
	};
	_proto.btn_group_i = function () {
		var t = new eui.Group();
		this.btn_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 61;
		t.height = 51.58;
		t.horizontalCenter = 1.5;
		t.width = 230.61;
		return t;
	};
	return CreateRoleSkin;
})(eui.Skin);generateEUI.paths['resource/skins/friend/FriendViewSkin.exml'] = window.FriendViewSkin = (function (_super) {
	__extends(FriendViewSkin, _super);
	function FriendViewSkin() {
		_super.call(this);
		this.skinParts = ["friend_bg","friend_fenge","friend_tishibg","friend_1","friend_4","friend_3","friend_2","friend_close"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = FriendViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.friend_bg_i(),this._Label1_i(),this.friend_fenge_i(),this.friend_tishibg_i(),this._Label2_i(),this._Label3_i(),this.friend_1_i(),this.friend_4_i(),this.friend_3_i(),this.friend_2_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this.friend_close_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.fillColor = 0x444444;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.friend_bg_i = function () {
		var t = new eui.Image();
		this.friend_bg = t;
		t.height = 668;
		t.horizontalCenter = 0.5;
		t.source = "friend_bg_png";
		t.verticalCenter = -50;
		t.width = 653;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = -138;
		t.size = 32;
		t.text = "好友";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -355;
		t.width = 166;
		return t;
	};
	_proto.friend_fenge_i = function () {
		var t = new eui.Image();
		this.friend_fenge = t;
		t.height = 7;
		t.horizontalCenter = -12;
		t.source = "friend_fenge_png";
		t.verticalCenter = 178.5;
		t.width = 544;
		return t;
	};
	_proto.friend_tishibg_i = function () {
		var t = new eui.Image();
		this.friend_tishibg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 201;
		t.horizontalCenter = -12;
		t.source = "friend_tishibg_png";
		t.verticalCenter = -39.5;
		t.width = 508;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = -141;
		t.size = 30;
		t.text = "好友：0/50";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 216;
		t.width = 230;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 45;
		t.lineSpacing = 4;
		t.size = 28;
		t.text = "小主现在还没有好友哦，赶快去添加吧";
		t.verticalCenter = -34;
		t.width = 272;
		return t;
	};
	_proto.friend_1_i = function () {
		var t = new eui.Image();
		this.friend_1 = t;
		t.height = 44;
		t.horizontalCenter = -212.5;
		t.name = "friend_1";
		t.source = "friend_btn2_png";
		t.verticalCenter = -293;
		t.width = 123;
		return t;
	};
	_proto.friend_4_i = function () {
		var t = new eui.Image();
		this.friend_4 = t;
		t.height = 44;
		t.horizontalCenter = 189.5;
		t.name = "friend_4";
		t.source = "friend_btn2_png";
		t.verticalCenter = -293;
		t.width = 123;
		return t;
	};
	_proto.friend_3_i = function () {
		var t = new eui.Image();
		this.friend_3 = t;
		t.height = 44;
		t.horizontalCenter = 54.5;
		t.name = "friend_3";
		t.source = "friend_btn2_png";
		t.verticalCenter = -293;
		t.width = 123;
		return t;
	};
	_proto.friend_2_i = function () {
		var t = new eui.Image();
		this.friend_2 = t;
		t.height = 44;
		t.horizontalCenter = -78.5;
		t.name = "friend_2";
		t.source = "friend_btn2_png";
		t.verticalCenter = -293;
		t.width = 123;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -217;
		t.size = 28;
		t.text = "好友";
		t.touchEnabled = false;
		t.verticalCenter = -295;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 188;
		t.size = 28;
		t.text = "黑名单";
		t.touchEnabled = false;
		t.verticalCenter = -295;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 55;
		t.size = 28;
		t.text = "申请";
		t.touchEnabled = false;
		t.verticalCenter = -295;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -79;
		t.size = 28;
		t.text = "添加";
		t.touchEnabled = false;
		t.verticalCenter = -295;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.horizontalCenter = 262;
		t.source = "friend_close_png";
		t.verticalCenter = -339;
		t.width = 56;
		return t;
	};
	return FriendViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/game/GameViewSkin.exml'] = window.GameViewSkin = (function (_super) {
	__extends(GameViewSkin, _super);
	function GameViewSkin() {
		_super.call(this);
		this.skinParts = ["fight_group","fight_start","player_tiao","player_mask","player_name","player_forces","player_group","npc_icon","npc_tiao","npc_mask","npc_name","npc_forces","npc_group","back_btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.fight_group_i(),this.fight_start_i(),this.player_group_i(),this.npc_group_i(),this.back_btn_i()];
	}
	var _proto = GameViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "game_bg_png";
		t.top = 0;
		return t;
	};
	_proto.fight_group_i = function () {
		var t = new eui.Group();
		this.fight_group = t;
		t.height = 200;
		t.horizontalCenter = -86;
		t.verticalCenter = -88;
		t.width = 200;
		return t;
	};
	_proto.fight_start_i = function () {
		var t = new eui.Image();
		this.fight_start = t;
		t.horizontalCenter = 0.5;
		t.source = "fight_btn_png";
		t.verticalCenter = -41.5;
		return t;
	};
	_proto.player_group_i = function () {
		var t = new eui.Group();
		this.player_group = t;
		t.left = 13;
		t.y = 1230;
		t.elementsContent = [this._Image2_i(),this.player_tiao_i(),this._Image3_i(),this._Image4_i(),this.player_mask_i(),this.player_name_i(),this.player_forces_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "player_icon_tiao_png";
		t.x = 68.5;
		t.y = 24;
		return t;
	};
	_proto.player_tiao_i = function () {
		var t = new eui.Image();
		this.player_tiao = t;
		t.source = "player_tiao_png";
		t.x = 49;
		t.y = 74;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_bg_png";
		t.x = -13;
		t.y = 5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "player_icon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.player_mask_i = function () {
		var t = new eui.Rect();
		this.player_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 374;
		t.x = 49;
		t.y = 74.6;
		return t;
	};
	_proto.player_name_i = function () {
		var t = new eui.Label();
		this.player_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.size = 22;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0xf2b729;
		t.verticalAlign = "middle";
		t.width = 344;
		t.x = 85.34;
		t.y = 24.51;
		return t;
	};
	_proto.player_forces_i = function () {
		var t = new eui.Label();
		this.player_forces = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16.8;
		t.size = 16;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 124;
		t.x = 86.14;
		t.y = 58.4;
		return t;
	};
	_proto.npc_group_i = function () {
		var t = new eui.Group();
		this.npc_group = t;
		t.right = -4;
		t.y = 2;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.npc_icon_i(),this.npc_tiao_i(),this.npc_mask_i(),this.npc_name_i(),this.npc_forces_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "npc_icon_tiao_png";
		t.x = 198.35;
		t.y = 15.34;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon_bg_png";
		t.x = 339.2;
		t.y = 2.66;
		return t;
	};
	_proto.npc_icon_i = function () {
		var t = new eui.Image();
		this.npc_icon = t;
		t.source = "npc_icon_3_png";
		t.x = 354.02;
		t.y = 0;
		return t;
	};
	_proto.npc_tiao_i = function () {
		var t = new eui.Image();
		this.npc_tiao = t;
		t.source = "npc_tiao_png";
		t.x = 0;
		t.y = 71.99;
		return t;
	};
	_proto.npc_mask_i = function () {
		var t = new eui.Rect();
		this.npc_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.scaleX = -1;
		t.width = 374;
		t.x = 374;
		t.y = 69.99;
		return t;
	};
	_proto.npc_name_i = function () {
		var t = new eui.Label();
		this.npc_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.size = 22;
		t.text = "Label";
		t.textAlign = "right";
		t.textColor = 0xF2B729;
		t.verticalAlign = "middle";
		t.width = 258.67;
		t.x = 82.54;
		t.y = 15.34;
		return t;
	};
	_proto.npc_forces_i = function () {
		var t = new eui.Label();
		this.npc_forces = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 124;
		t.x = 217.21;
		t.y = 51.34;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Image();
		this.back_btn = t;
		t.source = "game_back_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	return GameViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/game/LevelItemSkin.exml'] = window.LevelItemSkin = (function (_super) {
	__extends(LevelItemSkin, _super);
	function LevelItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","icon","level_name","kuang","level_text"];
		
		this.height = 140;
		this.width = 99.33;
		this.elementsContent = [this.bg_i(),this.icon_i(),this.level_name_i(),this.kuang_i(),this.level_text_i()];
	}
	var _proto = LevelItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "icon_lock_png";
		t.x = 0;
		t.y = 7.34;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "player_icon_png";
		t.x = 15.65;
		t.y = 0.34;
		return t;
	};
	_proto.level_name_i = function () {
		var t = new eui.Label();
		this.level_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.67;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 92;
		t.x = 3.33;
		t.y = 110;
		return t;
	};
	_proto.kuang_i = function () {
		var t = new eui.Image();
		this.kuang = t;
		t.source = "level_text_bg_png";
		t.x = 11.45;
		t.y = 78.24;
		return t;
	};
	_proto.level_text_i = function () {
		var t = new eui.Label();
		this.level_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.8;
		t.size = 16;
		t.text = "1-1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 51.6;
		t.x = 21.33;
		t.y = 84.4;
		return t;
	};
	return LevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/game/LevelViewSkin.exml'] = window.LevelViewSkin = (function (_super) {
	__extends(LevelViewSkin, _super);
	function LevelViewSkin() {
		_super.call(this);
		this.skinParts = ["back_btn","list"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.back_btn_i(),this._Image2_i(),this._Image3_i(),this._Scroller1_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = LevelViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "level_bg_png";
		t.top = 0;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Image();
		this.back_btn = t;
		t.source = "game_back_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 50;
		t.source = "level_jian_png";
		t.y = 1194.98;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 61;
		t.scaleX = -1;
		t.source = "level_jian_png";
		t.y = 1194.98;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 12;
		t.height = 168.19;
		t.horizontalCenter = 4.5;
		t.width = 528.79;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetY = 0;
		t.height = 128.79;
		t.x = 0;
		t.y = -60.61;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.requestedRowCount = 1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 4.5;
		t.top = 75;
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "level_tip_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "初入皇宫";
		t.textColor = 0xedc18e;
		t.x = 182.5;
		t.y = 11.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 5;
		t.verticalCenter = -100;
		t.elementsContent = [this._Image5_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "img_common_bottom03_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.size = 24;
		t.text = "穿越来到清朝却被误认为小姐的少女会有怎样的一段奇遇呢？";
		t.textAlign = "center";
		t.textColor = 0xef8f4c;
		t.verticalAlign = "middle";
		t.width = 590;
		t.x = 12;
		t.y = 3;
		return t;
	};
	return LevelViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/game/OverViewSkin.exml'] = window.OverViewSkin = (function (_super) {
	__extends(OverViewSkin, _super);
	var OverViewSkin$Skin1 = 	(function (_super) {
		__extends(OverViewSkin$Skin1, _super);
		function OverViewSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_common002_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_common001_png")
					])
			];
		}
		var _proto = OverViewSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_common001_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = 0;
			return t;
		};
		return OverViewSkin$Skin1;
	})(eui.Skin);

	function OverViewSkin() {
		_super.call(this);
		this.skinParts = ["title","tiao","tiao_mask","schedule","continue_btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = OverViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.title_i(),this._Image3_i(),this.tiao_i(),this.tiao_mask_i(),this.schedule_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.continue_btn_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "over_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "over_tip_kuang_png";
		t.x = 143.83;
		t.y = 199.18;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.size = 20;
		t.text = "秀女";
		t.textAlign = "center";
		t.textColor = 0x491803;
		t.verticalAlign = "middle";
		t.width = 87;
		t.x = 143.83;
		t.y = 200.18;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "over_tiao_bg_png";
		t.x = 259.84;
		t.y = 208.68;
		return t;
	};
	_proto.tiao_i = function () {
		var t = new eui.Image();
		this.tiao = t;
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(15,7,93,2);
		t.source = "over_tiao_png";
		t.width = 248;
		t.x = 259.84;
		t.y = 208.68;
		return t;
	};
	_proto.tiao_mask_i = function () {
		var t = new eui.Rect();
		this.tiao_mask = t;
		t.anchorOffsetX = 0;
		t.height = 20;
		t.width = 0;
		t.x = 259.84;
		t.y = 206.68;
		return t;
	};
	_proto.schedule_i = function () {
		var t = new eui.Label();
		this.schedule = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.size = 12;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xef5858;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 90;
		t.x = 339.04;
		t.y = 206.68;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "over_kuang_png";
		t.x = 167.72;
		t.y = 266.64;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "over_kuang_png";
		t.x = 282.71;
		t.y = 266.64;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "over_kuang_png";
		t.x = 394.71;
		t.y = 266.64;
		return t;
	};
	_proto.continue_btn_i = function () {
		var t = new eui.Button();
		this.continue_btn = t;
		t.label = "继续";
		t.x = 257;
		t.y = 394.5;
		t.skinName = OverViewSkin$Skin1;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "over_item0_png";
		t.x = 162.34;
		t.y = 276.64;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "over_item1_png";
		t.x = 282.71;
		t.y = 281.64;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "item_1003_png";
		t.x = 394.71;
		t.y = 282.64;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "2";
		t.x = 241.38;
		t.y = 334.64;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "2";
		t.x = 356.38;
		t.y = 334.64;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "2";
		t.x = 468.05;
		t.y = 335.2;
		return t;
	};
	return OverViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/game/UnlockViewSkin.exml'] = window.UnlockViewSkin = (function (_super) {
	__extends(UnlockViewSkin, _super);
	function UnlockViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Image4_i(),this._Image5_i(),this._Group3_i(),this._Label4_i(),this._Label5_i()];
	}
	var _proto = UnlockViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "lock_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 62;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "lock_tiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "已解锁";
		t.x = 314.5;
		t.y = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 52;
		t.top = 185;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "lock_name_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.text = "明湘";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 54;
		t.x = 5.63;
		t.y = 100.48;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "lock_role_png";
		t.verticalCenter = 14.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "lock_jieshao_bg_png";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 101;
		t.left = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "img_common03_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "img_dhsn_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "简介";
		t.textColor = 0xffb787;
		t.x = 52;
		t.y = 10.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 59;
		t.horizontalCenter = 14;
		t.size = 20;
		t.text = "单纯活泼，忠诚善良，敢爱敢恨，机缘之下成为你的大宫女。";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bottom = 188;
		t.horizontalCenter = 14;
		t.size = 20;
		t.text = "点击屏幕继续";
		return t;
	};
	return UnlockViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GuideViewSkin.exml'] = window.GuideViewSkin = (function (_super) {
	__extends(GuideViewSkin, _super);
	function GuideViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_left","bg_bottom","bg_top","bg_right","rect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_left_i(),this.bg_bottom_i(),this.bg_top_i(),this.bg_right_i(),this.rect_i()];
	}
	var _proto = GuideViewSkin.prototype;

	_proto.bg_left_i = function () {
		var t = new eui.Rect();
		this.bg_left = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 320;
		t.left = 0;
		t.top = 0;
		t.width = 456;
		return t;
	};
	_proto.bg_bottom_i = function () {
		var t = new eui.Rect();
		this.bg_bottom = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 1014.67;
		t.left = 0;
		t.width = 530.66;
		t.x = 10;
		return t;
	};
	_proto.bg_top_i = function () {
		var t = new eui.Rect();
		this.bg_top = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 245.33;
		t.right = 0;
		t.top = 0;
		t.width = 294.66;
		return t;
	};
	_proto.bg_right_i = function () {
		var t = new eui.Rect();
		this.bg_right = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 1089.33;
		t.right = 0;
		t.width = 220;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.alpha = 0;
		t.height = 73;
		t.width = 73;
		t.x = 455;
		t.y = 246;
		return t;
	};
	return GuideViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/information/InformationSetViewSkin.exml'] = window.InformationSetViewSkin = (function (_super) {
	__extends(InformationSetViewSkin, _super);
	function InformationSetViewSkin() {
		_super.call(this);
		this.skinParts = ["chuyou_tishi1","friend_close","chuyou_tishi2","label_1","btn_1","image_1","btn_2","image_2","roleinfo_login1","roleinfo_login2"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = InformationSetViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.chuyou_tishi1_i(),this.friend_close_i(),this.chuyou_tishi2_i(),this._Label1_i(),this._Label2_i(),this.label_1_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.btn_1_i(),this.image_1_i(),this.btn_2_i(),this.image_2_i(),this.roleinfo_login1_i(),this.roleinfo_login2_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.fillColor = 0x444444;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.chuyou_tishi1_i = function () {
		var t = new eui.Image();
		this.chuyou_tishi1 = t;
		t.height = 507;
		t.horizontalCenter = 0.5;
		t.source = "chuyou_tishi1_png";
		t.verticalCenter = 0.5;
		t.width = 693;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.horizontalCenter = 319;
		t.source = "friend_close_png";
		t.verticalCenter = -199;
		t.width = 56;
		return t;
	};
	_proto.chuyou_tishi2_i = function () {
		var t = new eui.Image();
		this.chuyou_tishi2 = t;
		t.height = 101;
		t.horizontalCenter = 108.5;
		t.source = "chuyou_tishi2_png";
		t.verticalCenter = -174.5;
		t.width = 365;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.horizontalCenter = 101;
		t.size = 30;
		t.text = "设置";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -173;
		t.width = 120;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 249;
		t.size = 20;
		t.text = "版本：10422";
		t.textColor = 0x050000;
		t.verticalCenter = -121;
		return t;
	};
	_proto.label_1_i = function () {
		var t = new eui.Label();
		this.label_1 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 62;
		t.size = 26;
		t.text = "昵称：精灵雨露";
		t.textColor = 0x050000;
		t.verticalCenter = -70;
		t.width = 256;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 61;
		t.size = 26;
		t.text = "游戏音效";
		t.textColor = 0x050000;
		t.verticalCenter = 113;
		t.width = 256;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 62;
		t.size = 26;
		t.text = "背景音乐";
		t.textColor = 0x050000;
		t.verticalCenter = 76;
		t.width = 256;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 63;
		t.size = 26;
		t.text = "区服：醉倾城1服";
		t.textColor = 0x050000;
		t.verticalCenter = 4;
		t.width = 256;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 63;
		t.size = 26;
		t.text = "编号：6299846046";
		t.textColor = 0x050000;
		t.verticalCenter = -35;
		t.width = 256;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Image();
		this.btn_1 = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 14;
		t.height = 28;
		t.horizontalCenter = 101.5;
		t.source = "roleinfo_set2_png";
		t.verticalCenter = 75;
		t.width = 65;
		return t;
	};
	_proto.image_1_i = function () {
		var t = new eui.Image();
		this.image_1 = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 14;
		t.height = 28;
		t.horizontalCenter = 101.5;
		t.source = "roleinfo_set1_png";
		t.touchEnabled = false;
		t.verticalCenter = 75;
		t.width = 65;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Image();
		this.btn_2 = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 14;
		t.height = 28;
		t.horizontalCenter = 101.5;
		t.source = "roleinfo_set2_png";
		t.verticalCenter = 113;
		t.width = 65;
		return t;
	};
	_proto.image_2_i = function () {
		var t = new eui.Image();
		this.image_2 = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 14;
		t.height = 28;
		t.horizontalCenter = 101.5;
		t.source = "roleinfo_set1_png";
		t.touchEnabled = false;
		t.verticalCenter = 113;
		t.width = 65;
		return t;
	};
	_proto.roleinfo_login1_i = function () {
		var t = new eui.Image();
		this.roleinfo_login1 = t;
		t.height = 51;
		t.horizontalCenter = -94.5;
		t.source = "roleinfo_login1_png";
		t.verticalCenter = 180.5;
		t.width = 123;
		return t;
	};
	_proto.roleinfo_login2_i = function () {
		var t = new eui.Image();
		this.roleinfo_login2 = t;
		t.height = 51;
		t.horizontalCenter = 124.5;
		t.source = "roleinfo_login2_png";
		t.verticalCenter = 180.5;
		t.width = 123;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.horizontalCenter = -91.5;
		t.size = 26;
		t.text = "退出游戏";
		t.touchEnabled = false;
		t.verticalCenter = 178;
		t.width = 117;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.horizontalCenter = 131.5;
		t.size = 26;
		t.text = "返回登录";
		t.touchEnabled = false;
		t.verticalCenter = 178;
		t.width = 117;
		return t;
	};
	return InformationSetViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/information/InformationViewSkin.exml'] = window.InformationViewSkin = (function (_super) {
	__extends(InformationViewSkin, _super);
	function InformationViewSkin() {
		_super.call(this);
		this.skinParts = ["mainview_bg","friend_close","roleinfo_title","roleinfo_toubg","mainview_tou","label_name","roleinfo_shili","roleinfo_bg1","roleinfo_tiao","roleinfo_shezhi"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = InformationViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.mainview_bg_i(),this.friend_close_i(),this.roleinfo_title_i(),this._Label1_i(),this.roleinfo_toubg_i(),this.mainview_tou_i(),this.label_name_i(),this._Label2_i(),this._Label3_i(),this.roleinfo_shili_i(),this.roleinfo_bg1_i(),this.roleinfo_tiao_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this.roleinfo_shezhi_i(),this._Label11_i()];
		return t;
	};
	_proto.mainview_bg_i = function () {
		var t = new eui.Image();
		this.mainview_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "roleinfo_bg_png";
		t.top = 0;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 99;
		t.left = 32;
		t.source = "roleinfo_info_png";
		t.top = 12;
		t.width = 114;
		return t;
	};
	_proto.roleinfo_title_i = function () {
		var t = new eui.Image();
		this.roleinfo_title = t;
		t.height = 74;
		t.horizontalCenter = 0;
		t.source = "roleinfo_title_png";
		t.top = 25;
		t.width = 212;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 22;
		t.size = 30;
		t.text = "角色信息";
		t.top = 43;
		return t;
	};
	_proto.roleinfo_toubg_i = function () {
		var t = new eui.Image();
		this.roleinfo_toubg = t;
		t.bottom = 265;
		t.height = 99;
		t.left = 78;
		t.source = "roleinfo_toubg_png";
		t.width = 106;
		return t;
	};
	_proto.mainview_tou_i = function () {
		var t = new eui.Image();
		this.mainview_tou = t;
		t.bottom = 278;
		t.height = 94;
		t.left = 92;
		t.source = "mainview_tou_png";
		t.width = 68;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 306;
		t.height = 50;
		t.horizontalCenter = 119;
		t.size = 30;
		t.text = "昵称 ：精灵雨露";
		t.textColor = 0xdd7171;
		t.verticalAlign = "middle";
		t.width = 356;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 226;
		t.height = 50;
		t.horizontalCenter = 119;
		t.size = 30;
		t.text = "联盟 ：暂未加入联盟";
		t.textColor = 0xdd7171;
		t.verticalAlign = "middle";
		t.width = 356;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 268;
		t.height = 50;
		t.horizontalCenter = 119;
		t.size = 30;
		t.text = "玩家ID ：156542";
		t.textColor = 0xdd7171;
		t.verticalAlign = "middle";
		t.width = 356;
		return t;
	};
	_proto.roleinfo_shili_i = function () {
		var t = new eui.Image();
		this.roleinfo_shili = t;
		t.bottom = 139;
		t.height = 43;
		t.horizontalCenter = -204.5;
		t.source = "roleinfo_shili_png";
		t.width = 337;
		return t;
	};
	_proto.roleinfo_bg1_i = function () {
		var t = new eui.Image();
		this.roleinfo_bg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 185;
		t.height = 31;
		t.horizontalCenter = 115;
		t.source = "roleinfo_bg1_png";
		t.width = 182;
		return t;
	};
	_proto.roleinfo_tiao_i = function () {
		var t = new eui.Image();
		this.roleinfo_tiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 181;
		t.height = 39;
		t.horizontalCenter = -9.5;
		t.source = "roleinfo_tiao_png";
		t.width = 123;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 188;
		t.horizontalCenter = -9;
		t.size = 26;
		t.text = "位份";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 172;
		t.height = 54;
		t.horizontalCenter = 91.5;
		t.size = 26;
		t.text = "主贵嫔";
		t.textAlign = "center";
		t.textColor = 0xd87d7d;
		t.verticalAlign = "middle";
		t.width = 117;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 138;
		t.height = 44;
		t.horizontalCenter = -266;
		t.size = 26;
		t.text = "势力3308";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 142;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 107;
		t.height = 17;
		t.horizontalCenter = 40;
		t.source = "roleinfo_bg1_png";
		t.width = 186;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 65;
		t.height = 17;
		t.horizontalCenter = 243;
		t.source = "roleinfo_bg1_png";
		t.width = 186;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 66;
		t.height = 17;
		t.horizontalCenter = 40;
		t.source = "roleinfo_bg1_png";
		t.width = 186;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 105;
		t.height = 17;
		t.horizontalCenter = 243;
		t.source = "roleinfo_bg1_png";
		t.width = 186;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 14;
		t.bottom = 61;
		t.height = 27;
		t.horizontalCenter = -57.5;
		t.source = "roleinfo_jiao_png";
		t.width = 27;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 103;
		t.height = 27;
		t.horizontalCenter = 144.5;
		t.source = "roleinfo_cai_png";
		t.width = 27;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 61;
		t.height = 27;
		t.horizontalCenter = 142.5;
		t.source = "roleinfo_rong_png";
		t.width = 27;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 105;
		t.height = 27;
		t.horizontalCenter = -55.5;
		t.source = "roleinfo_ji_png";
		t.width = 27;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bottom = 108;
		t.horizontalCenter = 4.5;
		t.size = 20;
		t.text = "心计 306";
		t.textColor = 0xd87d7d;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bottom = 64;
		t.horizontalCenter = 214.5;
		t.size = 20;
		t.text = "易容 267";
		t.textColor = 0xd87d7d;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bottom = 64;
		t.horizontalCenter = -1;
		t.size = 20;
		t.text = "交际 80";
		t.textColor = 0xd87d7d;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bottom = 104;
		t.horizontalCenter = 212.5;
		t.size = 20;
		t.text = "才华 121";
		t.textColor = 0xd87d7d;
		return t;
	};
	_proto.roleinfo_shezhi_i = function () {
		var t = new eui.Image();
		this.roleinfo_shezhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 374;
		t.height = 38;
		t.horizontalCenter = 254;
		t.source = "roleinfo_shezhi_png";
		t.width = 162;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 370;
		t.height = 42;
		t.horizontalCenter = 251;
		t.size = 30;
		t.text = "设置";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 124;
		return t;
	};
	return InformationViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/login/LoginViewSkin.exml'] = window.LoginViewSkin = (function (_super) {
	__extends(LoginViewSkin, _super);
	var LoginViewSkin$Skin2 = 	(function (_super) {
		__extends(LoginViewSkin$Skin2, _super);
		function LoginViewSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_login_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_login_png")
					])
			];
		}
		var _proto = LoginViewSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_login_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return LoginViewSkin$Skin2;
	})(eui.Skin);

	var LoginViewSkin$Skin3 = 	(function (_super) {
		__extends(LoginViewSkin$Skin3, _super);
		function LoginViewSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_login_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_login_png")
					])
			];
		}
		var _proto = LoginViewSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_login_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return LoginViewSkin$Skin3;
	})(eui.Skin);

	var LoginViewSkin$Skin4 = 	(function (_super) {
		__extends(LoginViewSkin$Skin4, _super);
		function LoginViewSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_login_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_login_png")
					])
			];
		}
		var _proto = LoginViewSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_login_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return LoginViewSkin$Skin4;
	})(eui.Skin);

	function LoginViewSkin() {
		_super.call(this);
		this.skinParts = ["title_label","account","password","login_btn","zhuce_btn","start_game","zhuce_label","yijian_label","denglu_btn","fuwu_group","zhanghao_group","huan_group","start_img","serverbtn_group","rect","close_img","btn_group","server_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhanghao_group_i(),this.serverbtn_group_i(),this.rect_i(),this.server_group_i()];
	}
	var _proto = LoginViewSkin.prototype;

	_proto.zhanghao_group_i = function () {
		var t = new eui.Group();
		this.zhanghao_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -75;
		t.elementsContent = [this._Rect1_i(),this.title_label_i(),this._Rect2_i(),this._Label1_i(),this.account_i(),this._Rect3_i(),this._Label2_i(),this.password_i(),this.login_btn_i(),this.zhuce_btn_i(),this.start_game_i(),this._Rect4_i(),this.zhuce_label_i(),this.yijian_label_i(),this.denglu_btn_i(),this.fuwu_group_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillAlpha = 0.95;
		t.height = 402;
		t.width = 424;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_label_i = function () {
		var t = new eui.Label();
		this.title_label = t;
		t.text = "账号登录";
		t.x = 152;
		t.y = 36.37;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0x302d2d;
		t.height = 45.69;
		t.width = 289.7;
		t.x = 67.15;
		t.y = 97.94;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "账号：";
		t.x = 75;
		t.y = 108.79;
		return t;
	};
	_proto.account_i = function () {
		var t = new eui.EditableText();
		this.account = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.prompt = "请输入账号..";
		t.promptColor = 0x706c6c;
		t.size = 20;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xeae5e5;
		t.verticalAlign = "middle";
		t.width = 207;
		t.x = 135;
		t.y = 107.12;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0x302D2D;
		t.height = 45.69;
		t.width = 289.7;
		t.x = 67.15;
		t.y = 162;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "密码：";
		t.x = 75;
		t.y = 172.85;
		return t;
	};
	_proto.password_i = function () {
		var t = new eui.EditableText();
		this.password = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.prompt = "请输入密码..";
		t.promptColor = 0x706C6C;
		t.size = 20;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xEAE5E5;
		t.verticalAlign = "middle";
		t.width = 207;
		t.x = 135;
		t.y = 171.18;
		return t;
	};
	_proto.login_btn_i = function () {
		var t = new eui.Button();
		this.login_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.69;
		t.label = "登陆";
		t.width = 289.7;
		t.x = 67.15;
		t.y = 253.16;
		t.skinName = LoginViewSkin$Skin2;
		return t;
	};
	_proto.zhuce_btn_i = function () {
		var t = new eui.Button();
		this.zhuce_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.69;
		t.label = "确定注册";
		t.visible = false;
		t.width = 289.7;
		t.x = 67.15;
		t.y = 253.16;
		t.skinName = LoginViewSkin$Skin3;
		return t;
	};
	_proto.start_game_i = function () {
		var t = new eui.Button();
		this.start_game = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.69;
		t.label = "进入游戏";
		t.visible = false;
		t.width = 289.7;
		t.x = 67.15;
		t.y = 253.16;
		t.skinName = LoginViewSkin$Skin4;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xfcf9f9;
		t.height = 2;
		t.width = 330.4;
		t.x = 46.8;
		t.y = 320.2;
		return t;
	};
	_proto.zhuce_label_i = function () {
		var t = new eui.Label();
		this.zhuce_label = t;
		t.size = 20;
		t.text = "注册账号";
		t.textColor = 0xf9b00e;
		t.x = 95;
		t.y = 346;
		return t;
	};
	_proto.yijian_label_i = function () {
		var t = new eui.Label();
		this.yijian_label = t;
		t.size = 20;
		t.text = "一键注册";
		t.textColor = 0xF9B00E;
		t.x = 246.01;
		t.y = 347.33;
		return t;
	};
	_proto.denglu_btn_i = function () {
		var t = new eui.Label();
		this.denglu_btn = t;
		t.size = 20;
		t.text = "账号登陆";
		t.textColor = 0xF9B00E;
		t.visible = false;
		t.x = 246.01;
		t.y = 347.33;
		return t;
	};
	_proto.fuwu_group_i = function () {
		var t = new eui.Group();
		this.fuwu_group = t;
		t.x = 94.03;
		t.y = 218;
		t.elementsContent = [this._CheckBox1_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._CheckBox1_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 0;
		t.label = "CheckBox";
		t.width = 25.34;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "接受";
		t.x = 30.68;
		t.y = 4.67;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "网络服务协议";
		t.textColor = 0x18e2de;
		t.x = 66.68;
		t.y = 4.67;
		return t;
	};
	_proto.serverbtn_group_i = function () {
		var t = new eui.Group();
		this.serverbtn_group = t;
		t.horizontalCenter = 10.5;
		t.verticalCenter = 424.5;
		t.visible = false;
		t.elementsContent = [this.huan_group_i(),this.start_img_i()];
		return t;
	};
	_proto.huan_group_i = function () {
		var t = new eui.Group();
		this.huan_group = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "server_kuang0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "server_hua_png";
		t.x = 110.47;
		t.y = 10.5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "醉倾城1服";
		t.textColor = 0xf9bf8b;
		t.x = 145.81;
		t.y = 11.83;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "点击换区";
		t.textColor = 0xf9bf8b;
		t.x = 340.47;
		t.y = 11.5;
		return t;
	};
	_proto.start_img_i = function () {
		var t = new eui.Image();
		this.start_img = t;
		t.source = "server_btn_png";
		t.x = 162.5;
		t.y = 75;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.server_group_i = function () {
		var t = new eui.Group();
		this.server_group = t;
		t.horizontalCenter = 15.5;
		t.verticalCenter = -84;
		t.visible = false;
		t.elementsContent = [this._Image3_i(),this.close_img_i(),this._Image4_i(),this._Label7_i(),this.btn_group_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "server_bg_png";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.close_img_i = function () {
		var t = new eui.Image();
		this.close_img = t;
		t.source = "server_close_png";
		t.x = 454;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "server_title_bg_png";
		t.x = 145.32;
		t.y = 49.15;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "选择区服";
		t.textColor = 0xf7ebe1;
		t.x = 219.99;
		t.y = 72.15;
		return t;
	};
	_proto.btn_group_i = function () {
		var t = new eui.Group();
		this.btn_group = t;
		t.x = 37.97;
		t.y = 171.8;
		t.elementsContent = [this._Image5_i(),this._Label8_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "server_kuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "醉倾城1服";
		t.textColor = 0xF9BF8B;
		t.x = 59.7;
		t.y = 16.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "server_hua_png";
		t.x = 20.5;
		t.y = 14.5;
		return t;
	};
	return LoginViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["mainview_bg","mainview_chuyou","mainview_pocong","mainview_shezhi","mainview_kuang","mainview_tiao","mainview_tou","label_name","label_shili","label_chenghao","mainview_aixin","mainview_jinbi","mainview_yinbi","label_aixin","label_jinbi","label_yinbi","mainview_huanzhuang","mainview_baoguo","mainview_youren","mainview_shop","mainview_rank","mainview_juqing","chatCom"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i(),this.chatCom_i()];
	}
	var _proto = MainViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.mainview_bg_i(),this.mainview_chuyou_i(),this.mainview_pocong_i(),this.mainview_shezhi_i(),this.mainview_kuang_i(),this.mainview_tiao_i(),this.mainview_tou_i(),this.label_name_i(),this.label_shili_i(),this.label_chenghao_i(),this.mainview_aixin_i(),this.mainview_jinbi_i(),this.mainview_yinbi_i(),this.label_aixin_i(),this.label_jinbi_i(),this.label_yinbi_i(),this.mainview_huanzhuang_i(),this.mainview_baoguo_i(),this.mainview_youren_i(),this.mainview_shop_i(),this.mainview_rank_i(),this.mainview_juqing_i()];
		return t;
	};
	_proto.mainview_bg_i = function () {
		var t = new eui.Image();
		this.mainview_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -390;
		t.left = 0;
		t.right = 0;
		t.source = "mainview_bg_png";
		t.top = -566;
		return t;
	};
	_proto.mainview_chuyou_i = function () {
		var t = new eui.Image();
		this.mainview_chuyou = t;
		t.height = 145;
		t.source = "mainview_chuyou_png";
		t.width = 207;
		t.x = 3;
		t.y = 1177;
		return t;
	};
	_proto.mainview_pocong_i = function () {
		var t = new eui.Image();
		this.mainview_pocong = t;
		t.height = 79;
		t.source = "mainview_pocong_png";
		t.width = 72;
		t.x = 53;
		t.y = 596;
		return t;
	};
	_proto.mainview_shezhi_i = function () {
		var t = new eui.Image();
		this.mainview_shezhi = t;
		t.height = 77;
		t.right = 33;
		t.source = "mainview_shezhi_png";
		t.top = 109;
		t.width = 62;
		return t;
	};
	_proto.mainview_kuang_i = function () {
		var t = new eui.Image();
		this.mainview_kuang = t;
		t.height = 119;
		t.source = "mainview_kuang_png";
		t.width = 303;
		t.x = 14.05;
		t.y = 8.5;
		return t;
	};
	_proto.mainview_tiao_i = function () {
		var t = new eui.Image();
		this.mainview_tiao = t;
		t.height = 61;
		t.source = "mainview_tiao_png";
		t.width = 422;
		t.x = 328;
		t.y = 18;
		return t;
	};
	_proto.mainview_tou_i = function () {
		var t = new eui.Image();
		this.mainview_tou = t;
		t.height = 94;
		t.source = "mainview_tou_png";
		t.width = 68;
		t.x = 30;
		t.y = 10;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 27.04;
		t.size = 24;
		t.text = "精灵雨露";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 124.79;
		t.x = 126.08;
		t.y = 27.52;
		return t;
	};
	_proto.label_shili_i = function () {
		var t = new eui.Label();
		this.label_shili = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 27.04;
		t.size = 20;
		t.text = "势力值：3015";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 206.61;
		t.x = 126.08;
		t.y = 59.44;
		return t;
	};
	_proto.label_chenghao_i = function () {
		var t = new eui.Label();
		this.label_chenghao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 25.53;
		t.size = 20;
		t.text = "侧贵嫔";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 105.09;
		t.x = 16.7;
		t.y = 100.46;
		return t;
	};
	_proto.mainview_aixin_i = function () {
		var t = new eui.Image();
		this.mainview_aixin = t;
		t.height = 27;
		t.source = "mainview_aixin_png";
		t.width = 29;
		t.x = 424.52;
		t.y = 36.52;
		return t;
	};
	_proto.mainview_jinbi_i = function () {
		var t = new eui.Image();
		this.mainview_jinbi = t;
		t.height = 28;
		t.source = "mainview_jinbi_png";
		t.width = 29;
		t.x = 643.98;
		t.y = 38.04;
		return t;
	};
	_proto.mainview_yinbi_i = function () {
		var t = new eui.Image();
		this.mainview_yinbi = t;
		t.height = 28;
		t.source = "mainview_yinbi_png";
		t.width = 29;
		t.x = 534.44;
		t.y = 36.52;
		return t;
	};
	_proto.label_aixin_i = function () {
		var t = new eui.Label();
		this.label_aixin = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimSun";
		t.size = 20;
		t.text = "100";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 51.21;
		t.x = 460.6;
		t.y = 39.56;
		return t;
	};
	_proto.label_jinbi_i = function () {
		var t = new eui.Label();
		this.label_jinbi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimSun";
		t.size = 20;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 57.27;
		t.x = 678.8;
		t.y = 41.08;
		return t;
	};
	_proto.label_yinbi_i = function () {
		var t = new eui.Label();
		this.label_yinbi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 21.52;
		t.size = 20;
		t.text = "100";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 60.3;
		t.x = 571.23;
		t.y = 39.56;
		return t;
	};
	_proto.mainview_huanzhuang_i = function () {
		var t = new eui.Image();
		this.mainview_huanzhuang = t;
		t.height = 83;
		t.source = "mainview_huanzhuang_png";
		t.width = 79;
		t.x = 53;
		t.y = 174;
		return t;
	};
	_proto.mainview_baoguo_i = function () {
		var t = new eui.Image();
		this.mainview_baoguo = t;
		t.height = 81;
		t.source = "mainview_baoguo_png";
		t.width = 76;
		t.x = 53;
		t.y = 270;
		return t;
	};
	_proto.mainview_youren_i = function () {
		var t = new eui.Image();
		this.mainview_youren = t;
		t.height = 81;
		t.source = "mainview_youren_png";
		t.width = 79;
		t.x = 53;
		t.y = 374;
		return t;
	};
	_proto.mainview_shop_i = function () {
		var t = new eui.Image();
		this.mainview_shop = t;
		t.height = 81;
		t.source = "mainview_shop_png";
		t.width = 74;
		t.x = 53;
		t.y = 485;
		return t;
	};
	_proto.mainview_rank_i = function () {
		var t = new eui.Image();
		this.mainview_rank = t;
		t.height = 79;
		t.source = "mainview_rank_png";
		t.width = 72;
		t.x = 53;
		t.y = 698;
		return t;
	};
	_proto.mainview_juqing_i = function () {
		var t = new eui.Image();
		this.mainview_juqing = t;
		t.height = 178;
		t.source = "mainview_juqing_png";
		t.width = 201;
		t.x = 543;
		t.y = 1156;
		return t;
	};
	_proto.chatCom_i = function () {
		var t = new ChatComp();
		this.chatCom = t;
		t.bottom = 12;
		t.horizontalCenter = -15;
		t.skinName = "ChatCompSkin";
		return t;
	};
	return MainViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/pocong/PoCongShowSkin.exml'] = window.PoCongShowSkin = (function (_super) {
	__extends(PoCongShowSkin, _super);
	function PoCongShowSkin() {
		_super.call(this);
		this.skinParts = ["bag_bg","bag_title","friend_close","pocong_jichu","pocong_image","pocong_jieshao","pocong_3","pocong_34","chuyou_itembg","chuyou_itembg1","chuyou_itembg2","chuyou_itembg3","chuyou_itembg4","label_name","friend_btn1","pocong_11","label","pocong_renwu","pocong_dui"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = PoCongShowSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bag_bg_i(),this.bag_title_i(),this.friend_close_i(),this.pocong_jichu_i(),this.pocong_image_i(),this.pocong_jieshao_i(),this._Label1_i(),this.pocong_3_i(),this.pocong_34_i(),this._Image1_i(),this._Image2_i(),this._Label2_i(),this._Label3_i(),this.chuyou_itembg_i(),this.chuyou_itembg1_i(),this.chuyou_itembg2_i(),this.chuyou_itembg3_i(),this.chuyou_itembg4_i(),this.label_name_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this.friend_btn1_i(),this.pocong_11_i(),this.label_i(),this.pocong_renwu_i(),this.pocong_dui_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i()];
		return t;
	};
	_proto.bag_bg_i = function () {
		var t = new eui.Image();
		this.bag_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -427;
		t.left = 0;
		t.right = 0;
		t.source = "bag_bg_png";
		t.top = -355;
		return t;
	};
	_proto.bag_title_i = function () {
		var t = new eui.Image();
		this.bag_title = t;
		t.height = 87;
		t.horizontalCenter = 0;
		t.source = "bag_title_png";
		t.top = 1;
		t.width = 402;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.right = 3;
		t.source = "friend_close_png";
		t.top = 0;
		t.width = 56;
		return t;
	};
	_proto.pocong_jichu_i = function () {
		var t = new eui.Image();
		this.pocong_jichu = t;
		t.height = 63;
		t.horizontalCenter = 12;
		t.source = "pocong_jichu_png";
		t.top = 10;
		t.width = 226;
		return t;
	};
	_proto.pocong_image_i = function () {
		var t = new eui.Image();
		this.pocong_image = t;
		t.height = 549;
		t.horizontalCenter = 0.5;
		t.source = "pocong_image_png";
		t.top = 102;
		t.width = 721;
		return t;
	};
	_proto.pocong_jieshao_i = function () {
		var t = new eui.Image();
		this.pocong_jieshao = t;
		t.height = 214;
		t.horizontalCenter = -251.5;
		t.source = "pocong_jieshao_png";
		t.top = 284;
		t.width = 67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = -249;
		t.lineSpacing = 3;
		t.size = 20;
		t.text = "和妍媚姿心巧肠笑";
		t.textAlign = "center";
		t.top = 360;
		t.verticalAlign = "middle";
		t.width = 52;
		return t;
	};
	_proto.pocong_3_i = function () {
		var t = new eui.Image();
		this.pocong_3 = t;
		t.height = 51;
		t.horizontalCenter = -224.5;
		t.source = "pocong_3_png";
		t.top = 706;
		t.width = 225;
		return t;
	};
	_proto.pocong_34_i = function () {
		var t = new eui.Image();
		this.pocong_34 = t;
		t.height = 51;
		t.horizontalCenter = -224.5;
		t.source = "pocong_3_png";
		t.top = 900;
		t.width = 225;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.horizontalCenter = -307;
		t.source = "pocong_ce_png";
		t.top = 706;
		t.width = 52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.horizontalCenter = -301;
		t.source = "pocong_ce_png";
		t.top = 903;
		t.width = 52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -196.5;
		t.text = "总属性 480";
		t.top = 714;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -217;
		t.text = "总资质 8";
		t.top = 910;
		return t;
	};
	_proto.chuyou_itembg_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.horizontalCenter = 27;
		t.source = "chuyou_itembg_png";
		t.top = 590;
		t.width = 252;
		return t;
	};
	_proto.chuyou_itembg1_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = -145;
		t.source = "chuyou_itembg_png";
		t.top = 778;
		t.width = 176;
		return t;
	};
	_proto.chuyou_itembg2_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = 49;
		t.source = "chuyou_itembg_png";
		t.top = 844;
		t.width = 176;
		return t;
	};
	_proto.chuyou_itembg3_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = -145;
		t.source = "chuyou_itembg_png";
		t.top = 844;
		t.width = 176;
		return t;
	};
	_proto.chuyou_itembg4_i = function () {
		var t = new eui.Image();
		this.chuyou_itembg4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = 49;
		t.source = "chuyou_itembg_png";
		t.top = 778;
		t.width = 176;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.horizontalCenter = 14;
		t.text = "明湘";
		t.textAlign = "center";
		t.top = 594;
		t.verticalAlign = "middle";
		t.width = 162;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = -210;
		t.size = 26;
		t.stroke = 1;
		t.text = "计";
		t.textAlign = "center";
		t.top = 776;
		t.verticalAlign = "middle";
		t.width = 54;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = -210;
		t.size = 26;
		t.stroke = 1;
		t.text = "交";
		t.textAlign = "center";
		t.top = 838;
		t.verticalAlign = "middle";
		t.width = 54;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = -12;
		t.size = 26;
		t.stroke = 1;
		t.text = "容";
		t.textAlign = "center";
		t.top = 838;
		t.verticalAlign = "middle";
		t.width = 54;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = -12;
		t.size = 26;
		t.stroke = 1;
		t.text = "才";
		t.textAlign = "center";
		t.top = 772;
		t.verticalAlign = "middle";
		t.width = 54;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.horizontalCenter = -121.5;
		t.size = 20;
		t.text = "心计 120";
		t.top = 784;
		t.width = 99;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.horizontalCenter = 65.5;
		t.size = 20;
		t.text = "仪容 120";
		t.top = 846;
		t.width = 99;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.horizontalCenter = -121.5;
		t.size = 20;
		t.text = "交际 120";
		t.top = 846;
		t.width = 99;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.horizontalCenter = 64.5;
		t.size = 20;
		t.text = "才华 120";
		t.top = 781;
		t.width = 99;
		return t;
	};
	_proto.friend_btn1_i = function () {
		var t = new eui.Group();
		this.friend_btn1 = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 546;
		t.y = 834;
		t.elementsContent = [this._Image3_i(),this._Label12_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "friend_btn1_png";
		t.width = 123;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.size = 30;
		t.text = "升级";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 92;
		t.x = 16;
		t.y = 4;
		return t;
	};
	_proto.pocong_11_i = function () {
		var t = new eui.Image();
		this.pocong_11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 178;
		t.source = "pocong_11_png";
		t.top = 772;
		t.width = 62;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.horizontalCenter = 280;
		t.text = "升十级";
		t.textAlign = "center";
		t.top = 764;
		t.verticalAlign = "middle";
		t.width = 138;
		return t;
	};
	_proto.pocong_renwu_i = function () {
		var t = new eui.Image();
		this.pocong_renwu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 479;
		t.horizontalCenter = 12;
		t.source = "pocong_renwu_png";
		t.top = 147;
		t.width = 508;
		return t;
	};
	_proto.pocong_dui_i = function () {
		var t = new eui.Image();
		this.pocong_dui = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.horizontalCenter = 182;
		t.source = "pocong_dui_png";
		t.top = 772;
		t.touchEnabled = false;
		t.width = 62;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 77;
		t.horizontalCenter = -247.5;
		t.source = "pocong_qiu3_png";
		t.top = 1024;
		t.width = 87;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 77;
		t.horizontalCenter = 266.5;
		t.source = "pocong_qiu4_png";
		t.top = 1024;
		t.width = 87;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 77;
		t.horizontalCenter = 95.5;
		t.source = "pocong_qiu2_png";
		t.top = 1024;
		t.width = 87;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 77;
		t.horizontalCenter = -74.5;
		t.source = "pocong_qiu1_png";
		t.top = 1024;
		t.width = 87;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -251.5;
		t.text = "2";
		t.top = 1134;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -66.5;
		t.text = "2";
		t.top = 1134;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 103.5;
		t.text = "2";
		t.top = 1134;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 273.5;
		t.text = "2";
		t.top = 1134;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.03;
		t.horizontalCenter = -245;
		t.text = "心计";
		t.top = 1045;
		t.width = 78.18;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -78;
		t.text = "才华";
		t.top = 1048;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 91;
		t.text = "交流";
		t.top = 1045;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 261;
		t.text = "仪容";
		t.top = 1042;
		return t;
	};
	return PoCongShowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/pocong/PoCongSkin.exml'] = window.PoCongSkin = (function (_super) {
	__extends(PoCongSkin, _super);
	function PoCongSkin() {
		_super.call(this);
		this.skinParts = ["bag_bg","bag_title","bag_line","friend_close","pocong_tujian","pocong_bg","pocong_item2","image_1","label","label_1"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = PoCongSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bag_bg_i(),this.bag_title_i(),this.bag_line_i(),this.friend_close_i(),this.pocong_tujian_i(),this.pocong_bg_i(),this._Label1_i(),this._Image1_i(),this.pocong_item2_i(),this.image_1_i(),this.label_i(),this.label_1_i(),this._Label2_i()];
		return t;
	};
	_proto.bag_bg_i = function () {
		var t = new eui.Image();
		this.bag_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -427;
		t.left = 0;
		t.right = 0;
		t.source = "bag_bg_png";
		t.top = -355;
		return t;
	};
	_proto.bag_title_i = function () {
		var t = new eui.Image();
		this.bag_title = t;
		t.height = 87;
		t.horizontalCenter = 0;
		t.source = "bag_title_png";
		t.top = 1;
		t.width = 402;
		return t;
	};
	_proto.bag_line_i = function () {
		var t = new eui.Image();
		this.bag_line = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 4.03;
		t.horizontalCenter = -1.5;
		t.source = "bag_line_png";
		t.top = 236;
		t.width = 747.03;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.right = 3;
		t.source = "friend_close_png";
		t.top = 0;
		t.width = 56;
		return t;
	};
	_proto.pocong_tujian_i = function () {
		var t = new eui.Image();
		this.pocong_tujian = t;
		t.height = 76;
		t.left = 32;
		t.source = "pocong_tujian_png";
		t.top = 156;
		t.width = 80;
		return t;
	};
	_proto.pocong_bg_i = function () {
		var t = new eui.Image();
		this.pocong_bg = t;
		t.height = 61;
		t.right = 19;
		t.source = "pocong_bg_png";
		t.top = 182;
		t.width = 281;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.right = 26;
		t.size = 24;
		t.text = "当前随从：1/10";
		t.textAlign = "left";
		t.top = 194;
		t.verticalAlign = "middle";
		t.width = 248;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.horizontalCenter = 12;
		t.source = "pocong_title_png";
		t.top = 10;
		t.width = 226;
		return t;
	};
	_proto.pocong_item2_i = function () {
		var t = new eui.Image();
		this.pocong_item2 = t;
		t.height = 306;
		t.source = "pocong_item2_png";
		t.width = 159;
		t.x = 28;
		t.y = 262;
		return t;
	};
	_proto.image_1_i = function () {
		var t = new eui.Image();
		this.image_1 = t;
		t.height = 165;
		t.source = "follower_1_png";
		t.width = 120;
		t.x = 48;
		t.y = 312;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 20;
		t.text = "资质：8";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 67.5;
		t.y = 483;
		return t;
	};
	_proto.label_1_i = function () {
		var t = new eui.Label();
		this.label_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 20;
		t.text = "明湘";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 67.5;
		t.y = 507;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "Lv.1";
		t.touchEnabled = false;
		t.x = 72;
		t.y = 272;
		return t;
	};
	return PoCongSkin;
})(eui.Skin);generateEUI.paths['resource/skins/pocong/PoCongTuItemSkin.exml'] = window.PoCongTuItemSkin = (function (_super) {
	__extends(PoCongTuItemSkin, _super);
	function PoCongTuItemSkin() {
		_super.call(this);
		this.skinParts = ["pocong_item2","image_1","label","label_1","pocong_quan","label_2"];
		
		this.height = 306;
		this.width = 159;
		this.elementsContent = [this.pocong_item2_i(),this.image_1_i(),this.label_i(),this.label_1_i(),this.pocong_quan_i(),this.label_2_i()];
	}
	var _proto = PoCongTuItemSkin.prototype;

	_proto.pocong_item2_i = function () {
		var t = new eui.Image();
		this.pocong_item2 = t;
		t.height = 306;
		t.source = "pocong_item2_png";
		t.width = 159;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_1_i = function () {
		var t = new eui.Image();
		this.image_1 = t;
		t.height = 165;
		t.source = "follower_1_png";
		t.width = 120;
		t.x = 20;
		t.y = 50;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 20;
		t.text = "资质：8";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 39.5;
		t.y = 221;
		return t;
	};
	_proto.label_1_i = function () {
		var t = new eui.Label();
		this.label_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 20;
		t.text = "name";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 39.5;
		t.y = 245;
		return t;
	};
	_proto.pocong_quan_i = function () {
		var t = new eui.Image();
		this.pocong_quan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "pocong_quan_png";
		t.width = 105;
		t.x = 34;
		t.y = 104;
		return t;
	};
	_proto.label_2_i = function () {
		var t = new eui.Label();
		this.label_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.size = 20;
		t.text = "暂未获取";
		t.width = 58;
		t.x = 60;
		t.y = 132;
		return t;
	};
	return PoCongTuItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/pocong/PoCongTuSkin.exml'] = window.PoCongTuSkin = (function (_super) {
	__extends(PoCongTuSkin, _super);
	function PoCongTuSkin() {
		_super.call(this);
		this.skinParts = ["bag_bg","bag_title","friend_close","pocong_tu","list","scroller","roleinfo_login2"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = PoCongTuSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bag_bg_i(),this.bag_title_i(),this.friend_close_i(),this.pocong_tu_i(),this.scroller_i(),this.roleinfo_login2_i(),this._Label1_i()];
		return t;
	};
	_proto.bag_bg_i = function () {
		var t = new eui.Image();
		this.bag_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -427;
		t.left = 0;
		t.right = 0;
		t.source = "bag_bg_png";
		t.top = -355;
		return t;
	};
	_proto.bag_title_i = function () {
		var t = new eui.Image();
		this.bag_title = t;
		t.height = 87;
		t.horizontalCenter = 0;
		t.source = "bag_title_png";
		t.top = 1;
		t.width = 402;
		return t;
	};
	_proto.friend_close_i = function () {
		var t = new eui.Image();
		this.friend_close = t;
		t.height = 56;
		t.right = 3;
		t.source = "friend_close_png";
		t.top = 0;
		t.width = 56;
		return t;
	};
	_proto.pocong_tu_i = function () {
		var t = new eui.Image();
		this.pocong_tu = t;
		t.height = 63;
		t.source = "pocong_tu_png";
		t.width = 226;
		t.x = 274;
		t.y = 10;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 740;
		t.width = 718;
		t.x = 19;
		t.y = 131;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.height = 788;
		t.width = 718;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.requestedColumnCount = 4;
		t.requestedRowCount = 3;
		return t;
	};
	_proto.roleinfo_login2_i = function () {
		var t = new eui.Image();
		this.roleinfo_login2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 57;
		t.height = 61;
		t.horizontalCenter = 0.5;
		t.source = "roleinfo_login2_png";
		t.width = 195;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 66;
		t.height = 44;
		t.horizontalCenter = -2;
		t.size = 26;
		t.text = "筛选";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 142;
		return t;
	};
	return PoCongTuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/popup/BagPopUpSkin.exml'] = window.BagPopUpSkin = (function (_super) {
	__extends(BagPopUpSkin, _super);
	var BagPopUpSkin$Skin5 = 	(function (_super) {
		__extends(BagPopUpSkin$Skin5, _super);
		function BagPopUpSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yeqian02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BagPopUpSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yeqian01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = 0;
			return t;
		};
		return BagPopUpSkin$Skin5;
	})(eui.Skin);

	var BagPopUpSkin$Skin6 = 	(function (_super) {
		__extends(BagPopUpSkin$Skin6, _super);
		function BagPopUpSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yeqian02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BagPopUpSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yeqian01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = 0;
			return t;
		};
		return BagPopUpSkin$Skin6;
	})(eui.Skin);

	function BagPopUpSkin() {
		_super.call(this);
		this.skinParts = ["returnBtn","propBtn","hechengBtn","itemNum1","item1","itemNum2","item2","itemNum3","item3","selectFocus","itemGroup","selectIcon","selectName","descLab","numLab","useBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.returnBtn_i(),this._Group1_i(),this.propBtn_i(),this.hechengBtn_i(),this.itemGroup_i(),this._Group3_i(),this.useBtn_i()];
	}
	var _proto = BagPopUpSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(75,5,454,6);
		t.source = "borrom_xuanxiang_png";
		t.top = 0;
		return t;
	};
	_proto.returnBtn_i = function () {
		var t = new eui.Image();
		this.returnBtn = t;
		t.source = "icon_guanbi_png";
		t.x = 682.14;
		t.y = 14.3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 9;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.3;
		t.source = "img_guide_dt_png";
		t.width = 235.52;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "font_beibao_png";
		t.x = 52.26;
		t.y = 4.3;
		return t;
	};
	_proto.propBtn_i = function () {
		var t = new eui.Button();
		this.propBtn = t;
		t.label = "道具";
		t.x = 20.67;
		t.y = 176;
		t.skinName = BagPopUpSkin$Skin5;
		return t;
	};
	_proto.hechengBtn_i = function () {
		var t = new eui.Button();
		this.hechengBtn = t;
		t.currentState = "down";
		t.label = "合成";
		t.x = 150.93;
		t.y = 176;
		t.skinName = BagPopUpSkin$Skin6;
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.x = 19.34;
		t.y = 246.68;
		t.elementsContent = [this.item1_i(),this.item2_i(),this.item3_i(),this.selectFocus_i()];
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.itemNum1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.source = "daojukuang_huang_png";
		t.width = 118;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "item_1003_png";
		t.x = 16;
		t.y = 29;
		return t;
	};
	_proto.itemNum1_i = function () {
		var t = new eui.Label();
		this.itemNum1 = t;
		t.size = 20;
		t.text = "2";
		t.textColor = 0x000000;
		t.x = 96;
		t.y = 71;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 131.59;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.itemNum2_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.67;
		t.source = "daojukuang_huang_png";
		t.width = 116.67;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemNum2_i = function () {
		var t = new eui.Label();
		this.itemNum2 = t;
		t.size = 20;
		t.text = "2";
		t.textColor = 0x000000;
		t.x = 95.34;
		t.y = 70.84;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "item_1002_png";
		t.x = 15.34;
		t.y = 29;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 264.66;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.itemNum3_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.67;
		t.source = "daojukuang_huang_png";
		t.width = 116.67;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemNum3_i = function () {
		var t = new eui.Label();
		this.itemNum3 = t;
		t.size = 20;
		t.text = "2";
		t.textColor = 0x000000;
		t.x = 92;
		t.y = 69;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "item_1007_png";
		t.x = 13.83;
		t.y = 23.84;
		return t;
	};
	_proto.selectFocus_i = function () {
		var t = new eui.Image();
		this.selectFocus = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.source = "icon_duigou_png";
		t.width = 37.1;
		t.x = 78;
		t.y = 85;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 178;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image10_i(),this._Group2_i(),this.selectName_i(),this.descLab_i(),this.numLab_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "img_wupinjieshaodi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 54.34;
		t.y = 25.19;
		t.elementsContent = [this._Image11_i(),this.selectIcon_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.source = "daojukuang_huang_png";
		t.width = 118;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectIcon_i = function () {
		var t = new eui.Image();
		this.selectIcon = t;
		t.source = "item_1003_png";
		t.x = 16;
		t.y = 29;
		return t;
	};
	_proto.selectName_i = function () {
		var t = new eui.Label();
		this.selectName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 118;
		t.x = 53;
		t.y = 150;
		return t;
	};
	_proto.descLab_i = function () {
		var t = new eui.Label();
		this.descLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.size = 20;
		t.text = "使用后随机获得一本强化卷轴";
		t.width = 407;
		t.x = 187;
		t.y = 28;
		return t;
	};
	_proto.numLab_i = function () {
		var t = new eui.Label();
		this.numLab = t;
		t.size = 20;
		t.text = "数量：6";
		t.x = 635.14;
		t.y = 157;
		return t;
	};
	_proto.useBtn_i = function () {
		var t = new eui.Group();
		this.useBtn = t;
		t.bottom = 51;
		t.horizontalCenter = 0.5;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this._Image12_i(),this._Label1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "btn_common_02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "使用";
		t.verticalCenter = 0;
		return t;
	};
	return BagPopUpSkin;
})(eui.Skin);generateEUI.paths['resource/skins/popup/DailyTaskItemSkin.exml'] = window.DailyTaskItemSkin = (function (_super) {
	__extends(DailyTaskItemSkin, _super);
	function DailyTaskItemSkin() {
		_super.call(this);
		this.skinParts = ["titleLab","icon","taskLab","descLab","btnLab","getBtn"];
		
		this.height = 150;
		this.width = 702;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.titleLab_i(),this._Image3_i(),this.icon_i(),this.taskLab_i(),this.descLab_i(),this.getBtn_i()];
	}
	var _proto = DailyTaskItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "bgqianduange_yxzqj_bg_00_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "rank_bg_list_consume_png";
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto.titleLab_i = function () {
		var t = new eui.Label();
		this.titleLab = t;
		t.size = 25;
		t.text = "主线剧情";
		t.x = 13;
		t.y = 7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "move_2_main_png";
		t.x = 10;
		t.y = 42;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "item11_png";
		t.x = 29;
		t.y = 66;
		return t;
	};
	_proto.taskLab_i = function () {
		var t = new eui.Label();
		this.taskLab = t;
		t.size = 20;
		t.text = "目标:0/1";
		t.textColor = 0x474343;
		t.x = 113;
		t.y = 55;
		return t;
	};
	_proto.descLab_i = function () {
		var t = new eui.Label();
		this.descLab = t;
		t.size = 20;
		t.text = "奖励：活跃度+10，官运+10";
		t.textColor = 0x474343;
		t.x = 113;
		t.y = 101;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new eui.Group();
		this.getBtn = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 558;
		t.y = 55;
		t.elementsContent = [this._Image4_i(),this.btnLab_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "btn01_welfare_common_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnLab_i = function () {
		var t = new eui.Label();
		this.btnLab = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 1;
		t.text = "前往";
		t.verticalCenter = 0;
		return t;
	};
	return DailyTaskItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/popup/DailyTaskSkin.exml'] = window.DailyTaskSkin = (function (_super) {
	__extends(DailyTaskSkin, _super);
	function DailyTaskSkin() {
		_super.call(this);
		this.skinParts = ["returnBtn","activeLab","progressBar","progressMask","list","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.returnBtn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.scroller_i()];
	}
	var _proto = DailyTaskSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(75,5,454,6);
		t.source = "borrom_xuanxiang_png";
		t.top = 0;
		return t;
	};
	_proto.returnBtn_i = function () {
		var t = new eui.Image();
		this.returnBtn = t;
		t.right = 16;
		t.source = "icon_guanbi_png";
		t.top = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 4;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.3;
		t.source = "img_guide_dt_png";
		t.width = 235.52;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "font_richang_png";
		t.x = 70;
		t.y = 2.15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 82;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.activeLab_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_future_main_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "check_menu_2_main_png";
		t.x = 8;
		t.y = 8.5;
		return t;
	};
	_proto.activeLab_i = function () {
		var t = new eui.Label();
		this.activeLab = t;
		t.size = 20;
		t.text = "今日活跃度 0";
		t.x = 80.5;
		t.y = 25;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 163;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.progressBar_i(),this.progressMask_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "img_baoxiang_png";
		t.x = 110.14;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "img_baoxiang_png";
		t.x = 230.48;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "img_baoxiang_png";
		t.x = 354.49;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "img_baoxiang_png";
		t.x = 478.48;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "img_baoxiang_png";
		t.x = 597.64;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "loading_fight_skill_bg_main_png";
		t.x = 0;
		t.y = 67.64;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "arrow_bg_main_png";
		t.x = 130.15;
		t.y = 66.32;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "arrow_bg_main_png";
		t.x = 249.65;
		t.y = 66.32;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "arrow_bg_main_png";
		t.x = 372.91;
		t.y = 66.32;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "arrow_bg_main_png";
		t.x = 493.81;
		t.y = 66.32;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "arrow_bg_main_png";
		t.x = 618.14;
		t.y = 66.32;
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.Image();
		this.progressBar = t;
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(11,1,70,7);
		t.source = "img_jindutiao_png";
		t.width = 600;
		t.x = 76.15;
		t.y = 97.98;
		return t;
	};
	_proto.progressMask_i = function () {
		var t = new eui.Rect();
		this.progressMask = t;
		t.anchorOffsetX = 0;
		t.height = 20;
		t.width = 600;
		t.x = 76.15;
		t.y = 92.48;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "10";
		t.textColor = 0xfce6c9;
		t.x = 132.15;
		t.y = 114.48;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "30";
		t.textColor = 0xFCE6C9;
		t.x = 252.65;
		t.y = 114.48;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "60";
		t.textColor = 0xFCE6C9;
		t.x = 377.91;
		t.y = 114.48;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "100";
		t.textColor = 0xFCE6C9;
		t.x = 497.48;
		t.y = 114.48;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "140";
		t.textColor = 0xFCE6C9;
		t.x = 616.64;
		t.y = 112.48;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.horizontalCenter = 0.5;
		t.top = 315;
		t.width = 733;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.useVirtualLayout = false;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	return DailyTaskSkin;
})(eui.Skin);generateEUI.paths['resource/skins/popup/ShopPopUpSkin.exml'] = window.ShopPopUpSkin = (function (_super) {
	__extends(ShopPopUpSkin, _super);
	var ShopPopUpSkin$Skin7 = 	(function (_super) {
		__extends(ShopPopUpSkin$Skin7, _super);
		function ShopPopUpSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn01_welfare_common01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPopUpSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn01_welfare_common01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.left = 51;
			t.size = 20;
			t.text = "128";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "icon_yuanbao_png";
			t.x = 8.06;
			t.y = 9.56;
			return t;
		};
		return ShopPopUpSkin$Skin7;
	})(eui.Skin);

	var ShopPopUpSkin$Skin8 = 	(function (_super) {
		__extends(ShopPopUpSkin$Skin8, _super);
		function ShopPopUpSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn01_welfare_common01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPopUpSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn01_welfare_common01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.left = 51;
			t.size = 20;
			t.text = "128";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "icon_yuanbao_png";
			t.x = 8.06;
			t.y = 9.56;
			return t;
		};
		return ShopPopUpSkin$Skin8;
	})(eui.Skin);

	var ShopPopUpSkin$Skin9 = 	(function (_super) {
		__extends(ShopPopUpSkin$Skin9, _super);
		function ShopPopUpSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn01_welfare_common01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPopUpSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn01_welfare_common01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.left = 51;
			t.size = 20;
			t.text = "128";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "icon_yuanbao_png";
			t.x = 8.06;
			t.y = 9.56;
			return t;
		};
		return ShopPopUpSkin$Skin9;
	})(eui.Skin);

	var ShopPopUpSkin$Skin10 = 	(function (_super) {
		__extends(ShopPopUpSkin$Skin10, _super);
		function ShopPopUpSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn01_welfare_common01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPopUpSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn01_welfare_common01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.left = 51;
			t.size = 20;
			t.text = "128";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "icon_yuanbao_png";
			t.x = 8.06;
			t.y = 9.56;
			return t;
		};
		return ShopPopUpSkin$Skin10;
	})(eui.Skin);

	var ShopPopUpSkin$Skin11 = 	(function (_super) {
		__extends(ShopPopUpSkin$Skin11, _super);
		function ShopPopUpSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn01_welfare_common01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPopUpSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn01_welfare_common01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.left = 51;
			t.size = 20;
			t.text = "128";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "icon_yuanbao_png";
			t.x = 8.06;
			t.y = 9.56;
			return t;
		};
		return ShopPopUpSkin$Skin11;
	})(eui.Skin);

	function ShopPopUpSkin() {
		_super.call(this);
		this.skinParts = ["returnBtn","button1","button2","button3","button4","button5"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = ShopPopUpSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(75,5,454,6);
		t.source = "borrom_xuanxiang_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 150;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.elementsContent = [this._Image2_i(),this.returnBtn_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this.button1_i(),this.button2_i(),this.button3_i(),this.button4_i(),this.button5_i(),this._Image13_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.3;
		t.source = "img_guide_dt_png";
		t.width = 235.52;
		t.x = 230.24;
		t.y = 0;
		return t;
	};
	_proto.returnBtn_i = function () {
		var t = new eui.Image();
		this.returnBtn = t;
		t.source = "icon_guanbi_png";
		t.x = 648.82;
		t.y = 1.07;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_limit01_consume_png";
		t.x = 0;
		t.y = 147.3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_limit01_consume_png";
		t.x = 178;
		t.y = 147.3;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "img_limit01_consume_png";
		t.x = 356;
		t.y = 147.3;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "img_limit01_consume_png";
		t.x = 534.82;
		t.y = 147.3;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "img_limit01_consume_png";
		t.x = 0;
		t.y = 435.3;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "item_1007_png";
		t.x = 35.5;
		t.y = 222.3;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "item_1008_png";
		t.x = 217;
		t.y = 216.3;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "item_1009_png";
		t.x = 388.5;
		t.y = 222.3;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "item_1003_png";
		t.x = 573.82;
		t.y = 230.8;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "item_1002_png";
		t.x = 39;
		t.y = 518.3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "杏仁饼";
		t.textColor = 0x000000;
		t.x = 51.44;
		t.y = 171.91;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "绿叶子";
		t.textColor = 0x000000;
		t.x = 230.24;
		t.y = 171.91;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "黄云散";
		t.textColor = 0x000000;
		t.x = 408;
		t.y = 171.91;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "属性丸";
		t.textColor = 0x000000;
		t.x = 586.82;
		t.y = 171.91;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "魅力丸";
		t.textColor = 0x000000;
		t.x = 50;
		t.y = 460.17;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "限购数：10";
		t.textColor = 0xf96363;
		t.x = 30.97;
		t.y = 332.4;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "限购数：10";
		t.textColor = 0xF96363;
		t.x = 208.5;
		t.y = 332.4;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "限购数：10";
		t.textColor = 0xF96363;
		t.x = 384.5;
		t.y = 332.4;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "限购数：10";
		t.textColor = 0xF96363;
		t.x = 565.32;
		t.y = 332.4;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "限购数：10";
		t.textColor = 0xF96363;
		t.x = 28.5;
		t.y = 618.16;
		return t;
	};
	_proto.button1_i = function () {
		var t = new eui.Button();
		this.button1 = t;
		t.label = "288";
		t.x = 20.97;
		t.y = 352.4;
		t.skinName = ShopPopUpSkin$Skin7;
		return t;
	};
	_proto.button2_i = function () {
		var t = new eui.Button();
		this.button2 = t;
		t.label = "328";
		t.x = 199.38;
		t.y = 353.92;
		t.skinName = ShopPopUpSkin$Skin8;
		return t;
	};
	_proto.button3_i = function () {
		var t = new eui.Button();
		this.button3 = t;
		t.label = "498";
		t.x = 376.5;
		t.y = 353.92;
		t.skinName = ShopPopUpSkin$Skin9;
		return t;
	};
	_proto.button4_i = function () {
		var t = new eui.Button();
		this.button4 = t;
		t.label = "998";
		t.x = 555.32;
		t.y = 353.92;
		t.skinName = ShopPopUpSkin$Skin10;
		return t;
	};
	_proto.button5_i = function () {
		var t = new eui.Button();
		this.button5 = t;
		t.label = "198";
		t.x = 20.97;
		t.y = 639.68;
		t.skinName = ShopPopUpSkin$Skin11;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "font_daojushangcheng_png";
		t.x = 244.35;
		t.y = 5.3;
		return t;
	};
	return ShopPopUpSkin;
})(eui.Skin);generateEUI.paths['resource/skins/popup/StoryPopUpSkin.exml'] = window.StoryPopUpSkin = (function (_super) {
	__extends(StoryPopUpSkin, _super);
	function StoryPopUpSkin() {
		_super.call(this);
		this.skinParts = ["bg","leftRole","leftRoleGroup","rightRole","rightNameLab","rightRoleGroup","jumpBtn","contentLab","storyGroup","select1Lab","way1","select2Lab","way2","selectGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.storyGroup_i(),this.selectGroup_i()];
	}
	var _proto = StoryPopUpSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.left = 0;
		t.right = 0;
		t.source = "img_0_png";
		t.top = 0;
		return t;
	};
	_proto.storyGroup_i = function () {
		var t = new eui.Group();
		this.storyGroup = t;
		t.bottom = 107;
		t.horizontalCenter = 14.5;
		t.elementsContent = [this.leftRoleGroup_i(),this.rightRoleGroup_i(),this._Image3_i(),this.jumpBtn_i(),this.contentLab_i()];
		return t;
	};
	_proto.leftRoleGroup_i = function () {
		var t = new eui.Group();
		this.leftRoleGroup = t;
		t.x = 9.86;
		t.y = 523.66;
		t.elementsContent = [this.leftRole_i(),this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto.leftRole_i = function () {
		var t = new eui.Image();
		this.leftRole = t;
		t.source = "Mainbust_png";
		t.x = 6.65;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottom_mingzi_png";
		t.x = 0;
		t.y = 298.18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "我";
		t.x = 56;
		t.y = 311.68;
		return t;
	};
	_proto.rightRoleGroup_i = function () {
		var t = new eui.Group();
		this.rightRoleGroup = t;
		t.x = 446;
		t.y = 531.66;
		t.elementsContent = [this.rightRole_i(),this._Image2_i(),this.rightNameLab_i()];
		return t;
	};
	_proto.rightRole_i = function () {
		var t = new eui.Image();
		this.rightRole = t;
		t.source = "guanjiamomo_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bottom_mingzi_png";
		t.x = 103;
		t.y = 290.18;
		return t;
	};
	_proto.rightNameLab_i = function () {
		var t = new eui.Label();
		this.rightNameLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.67;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 118.34;
		t.x = 107.83;
		t.y = 294.34;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_bottom_duihua_png";
		t.x = 0;
		t.y = 864;
		return t;
	};
	_proto.jumpBtn_i = function () {
		var t = new eui.Group();
		this.jumpBtn = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.x = 552.5;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_tiaoguo 1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "跳过";
		t.x = 82.5;
		t.y = 13;
		return t;
	};
	_proto.contentLab_i = function () {
		var t = new eui.Label();
		this.contentLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.33;
		t.lineSpacing = 8;
		t.size = 20;
		t.text = "";
		t.textColor = 0x9b5c3e;
		t.width = 612.67;
		t.x = 40.51;
		t.y = 892;
		return t;
	};
	_proto.selectGroup_i = function () {
		var t = new eui.Group();
		this.selectGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.way1_i(),this.way2_i()];
		return t;
	};
	_proto.way1_i = function () {
		var t = new eui.Group();
		this.way1 = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.select1Lab_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "borrom_xuanxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.select1Lab_i = function () {
		var t = new eui.Label();
		this.select1Lab = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "";
		t.textColor = 0x9b5c3e;
		t.width = 427;
		t.x = 83.15;
		t.y = 25.5;
		return t;
	};
	_proto.way2_i = function () {
		var t = new eui.Group();
		this.way2 = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 2.31;
		t.y = 192.67;
		t.elementsContent = [this._Image6_i(),this.select2Lab_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "borrom_xuanxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.select2Lab_i = function () {
		var t = new eui.Label();
		this.select2Lab = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "";
		t.textColor = 0x9B5C3E;
		t.width = 427;
		t.x = 79.83;
		t.y = 25.5;
		return t;
	};
	return StoryPopUpSkin;
})(eui.Skin);generateEUI.paths['resource/skins/story/StoryViewSkin.exml'] = window.StoryViewSkin = (function (_super) {
	__extends(StoryViewSkin, _super);
	function StoryViewSkin() {
		_super.call(this);
		this.skinParts = ["img1_1","img1_2","img1_3","group1","img2_1","img2_2","img2_3","group2","img3_1","img3_2","img3_3","group3","img4_2","img4_1","group4"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.group1_i(),this.group2_i(),this.group3_i(),this.group4_i()];
	}
	var _proto = StoryViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.horizontalCenter = -22;
		t.verticalCenter = -57;
		t.elementsContent = [this.img1_1_i(),this.img1_2_i(),this.img1_3_i()];
		return t;
	};
	_proto.img1_1_i = function () {
		var t = new eui.Image();
		this.img1_1 = t;
		t.alpha = 0;
		t.source = "img1_02_png";
		t.x = 44.5;
		t.y = 144.5;
		return t;
	};
	_proto.img1_2_i = function () {
		var t = new eui.Image();
		this.img1_2 = t;
		t.alpha = 0;
		t.source = "img1_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img1_3_i = function () {
		var t = new eui.Image();
		this.img1_3 = t;
		t.alpha = 0;
		t.source = "img1_03_png";
		t.x = 44.5;
		t.y = 522;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.horizontalCenter = -9.5;
		t.verticalCenter = -110.5;
		t.elementsContent = [this.img2_1_i(),this.img2_2_i(),this.img2_3_i()];
		return t;
	};
	_proto.img2_1_i = function () {
		var t = new eui.Image();
		this.img2_1 = t;
		t.alpha = 0;
		t.source = "img2_03_png";
		t.x = 20;
		t.y = 409;
		return t;
	};
	_proto.img2_2_i = function () {
		var t = new eui.Image();
		this.img2_2 = t;
		t.alpha = 0;
		t.source = "img2_01_png";
		t.x = 0;
		t.y = 65;
		return t;
	};
	_proto.img2_3_i = function () {
		var t = new eui.Image();
		this.img2_3 = t;
		t.alpha = 0;
		t.source = "img2_02_png";
		t.x = 344.5;
		t.y = 0;
		return t;
	};
	_proto.group3_i = function () {
		var t = new eui.Group();
		this.group3 = t;
		t.horizontalCenter = 3.5;
		t.verticalCenter = -27.5;
		t.elementsContent = [this.img3_1_i(),this.img3_2_i(),this.img3_3_i()];
		return t;
	};
	_proto.img3_1_i = function () {
		var t = new eui.Image();
		this.img3_1 = t;
		t.alpha = 0;
		t.source = "img3_01_png";
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto.img3_2_i = function () {
		var t = new eui.Image();
		this.img3_2 = t;
		t.alpha = 0;
		t.source = "img3_02_png";
		t.x = 79;
		t.y = 69.41;
		return t;
	};
	_proto.img3_3_i = function () {
		var t = new eui.Image();
		this.img3_3 = t;
		t.alpha = 0;
		t.source = "img3_03_png";
		t.x = 0;
		t.y = 153.32;
		return t;
	};
	_proto.group4_i = function () {
		var t = new eui.Group();
		this.group4 = t;
		t.horizontalCenter = -7.5;
		t.verticalCenter = -64;
		t.elementsContent = [this.img4_2_i(),this.img4_1_i()];
		return t;
	};
	_proto.img4_2_i = function () {
		var t = new eui.Image();
		this.img4_2 = t;
		t.alpha = 0;
		t.source = "img4_02_png";
		t.x = 0;
		t.y = 372.5;
		return t;
	};
	_proto.img4_1_i = function () {
		var t = new eui.Image();
		this.img4_1 = t;
		t.alpha = 0;
		t.source = "img4_01_png";
		t.x = 42.47;
		t.y = 0;
		return t;
	};
	return StoryViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TipsSkin.exml'] = window.TipsSkin = (function (_super) {
	__extends(TipsSkin, _super);
	function TipsSkin() {
		_super.call(this);
		this.skinParts = ["pic","lab"];
		
		this.height = 140;
		this.width = 737;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TipsSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.elementsContent = [this.pic_i(),this.lab_i()];
		return t;
	};
	_proto.pic_i = function () {
		var t = new eui.Image();
		this.pic = t;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(152,28,78,20);
		t.source = "bottom_common08_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "yt";
		t.height = 31;
		t.size = 20;
		t.text = "元宝不足";
		t.textAlign = "center";
		t.textColor = 0xfcaf94;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 581;
		t.x = 86;
		t.y = 60;
		return t;
	};
	return TipsSkin;
})(eui.Skin);