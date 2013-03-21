/**
 * @author chazz
 * JQuery Webcam Plugin - webcam plugin that returns the Base64 encoded data to javascript
 * 
 * usage: 
 * webcam.snap(countdownTime) or webcam.snap() - capture the image in the camera
 * webcam.getCameraList() - returns list of devices
 * 
 * 	
 * Defaults
 * 
 * swf: '/resources/swf/webcam.swf',
 * width: '560',
 * height: '400',
 * quality: '80',
 * debug: false,
 * save : function(){},
 * ready : function(){}
 * 
 */
var webcam=new Object;var webcamSettings={swf:"/resources/swf/webcam.swf",width:"560",height:"400",quality:"80",debug:false,save:function(){},ready:function(){}};var wcLog=function(){};var wcSaveCB=function(e){webcam.data=e;webcam.getImageData=function(){return"data:image/png;base64,"+webcam.data;};webcamSettings.save(e)};var wcReadyCB=function(){webcam.getCameraList=function(){return document.getElementById("webcam-object").getCameraList()};webcamSettings.ready()};(function(e){e.fn.webcam=function(t){return this.each(function(){var n=e(this);webcam.snap=function(e){document.getElementById("webcam-object").snap(e)};webcam.reset=function(){document.getElementById("webcam-object").reset()};e.extend(webcamSettings,t);if(webcamSettings.debug){wcLog=function(e){console.log(e)}}n.html('<object id="webcam-object" type="application/x-shockwave-flash" data="'+webcamSettings.swf+'" width="'+webcamSettings.width+'" height="'+webcamSettings.height+'">'+'<param name="movie" value="'+webcamSettings.swf+'" />'+"<!-- Required paramter or not, depends on application -->"+'<param name="FlashVars" value="saveCB=wcSaveCB&readyCB=wcReadyCB'+"&quality="+webcamSettings.quality+'&logCB=wcLog"/>'+'<param name="allowScriptAccess" value="always" />'+'<param name="quality" value="high" />'+'<param name="menu" value="false" />'+"</object>")})}})(jQuery)