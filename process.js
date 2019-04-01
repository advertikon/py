 var fs = require( "fs" );
 var HASH1 = {};
 var sourceHash;

 var Decoder = function(name, ll) {
 	name = eval( name );
 	ll = eval( ll );
  /** @type {number} */
  name = name - 0;
  var result = sourceHash[name];
  if (Decoder["initialized"] === undefined) {
	(function() {
	  var evaluate = Function("return (function () " + '{}.constructor("return this")()' + ");");
	  var lval = evaluate();
	  /** @type {string} */
	  var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	  if (!lval["atob"]) {
		/**
		 * @param {?} i
		 * @return {?}
		 */
		lval["atob"] = function(i) {
		  var str = String(i)["replace"](/=+$/, "");
		  /** @type {number} */
		  var bc = 0;
		  var bs;
		  var buffer;
		  /** @type {number} */
		  var Y = 0;
		  /** @type {string} */
		  var pix_color = "";
		  for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
			buffer = listeners["indexOf"](buffer);
		  }
		  return pix_color;
		};
	  }
	})();

	var doDecode = function(data, fn) {
	  /** @type {!Array} */
	  var secretKey = [];
	  /** @type {number} */
	  var y = 0;
	  var temp;
	  /** @type {string} */
	  var testResult = "";
	  /** @type {string} */
	  var tempData = "";
	  /** @type {string} */
	
	  data = atob(data);
	  /** @type {number} */
	  var val = 0;
	  var key = data["length"];
	  for (; val < key; val++) {
		/** @type {string} */
		tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
	  }

	  /** @type {string} */
	  data = decodeURIComponent(tempData);
	  /** @type {number} */
	  var x = 0;
	  for (; x < 256; x++) {
		/** @type {number} */
		secretKey[x] = x;
	  }
	  /** @type {number} */
	  x = 0;
	  for (; x < 256; x++) {
		/** @type {number} */
		y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
		temp = secretKey[x];
		secretKey[x] = secretKey[y];
		secretKey[y] = temp;
	  }
	  /** @type {number} */
	  x = 0;
	  /** @type {number} */
	  y = 0;
	  /** @type {number} */
	  var i = 0;
	  for (; i < data["length"]; i++) {
		/** @type {number} */
		x = (x + 1) % 256;
		/** @type {number} */
		y = (y + secretKey[x]) % 256;
		temp = secretKey[x];
		secretKey[x] = secretKey[y];
		secretKey[y] = temp;
		testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
	  }
	  return testResult;
	};
	/** @type {function(string, !Object): ?} */
	Decoder["doDecode"] = doDecode;
	Decoder["data"] = {};
	/** @type {boolean} */
	Decoder["initialized"] = !![];
  }
  var cachedValue = Decoder["data"][name];
  if (cachedValue === undefined) {
	Decoder["data"][name] = result;
  } else {
	result = cachedValue;
  }

  return Decoder.doDecode( result, ll );
};

var Decoder2 = function(name, ll) {
  /** @type {number} */
  name = name - 0;
  var result = HASH2[name];
  if (Decoder2["initialized"] === undefined) {
	(function() {
	  var evaluate = Function("return (function () " + '{}.constructor("return this")()' + ");");
	  var lval = evaluate();
	  /** @type {string} */
	  var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	  if (!lval["atob"]) {
		/**
		 * @param {?} i
		 * @return {?}
		 */
		lval["atob"] = function(i) {
		  var str = String(i)["replace"](/=+$/, "");
		  /** @type {number} */
		  var bc = 0;
		  var bs;
		  var buffer;
		  /** @type {number} */
		  var Y = 0;
		  /** @type {string} */
		  var pix_color = "";
		  for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
			buffer = listeners["indexOf"](buffer);
		  }
		  return pix_color;
		};
	  }
	})();
	/**
	 * @param {string} data
	 * @param {!Object} fn
	 * @return {?}
	 */
	var doDecode = function(data, fn) {
	  /** @type {!Array} */
	  var secretKey = [];
	  /** @type {number} */
	  var y = 0;
	  var temp;
	  /** @type {string} */
	  var testResult = "";
	  /** @type {string} */
	  var tempData = "";
	  /** @type {string} */
	  data = atob(data);
	  /** @type {number} */
	  var val = 0;
	  var key = data["length"];
	  for (; val < key; val++) {
		/** @type {string} */
		tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
	  }
	  /** @type {string} */
	  data = decodeURIComponent(tempData);
	  /** @type {number} */
	  var x = 0;
	  for (; x < 256; x++) {
		/** @type {number} */
		secretKey[x] = x;
	  }
	  /** @type {number} */
	  x = 0;
	  for (; x < 256; x++) {
		/** @type {number} */
		y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
		temp = secretKey[x];
		secretKey[x] = secretKey[y];
		secretKey[y] = temp;
	  }
	  /** @type {number} */
	  x = 0;
	  /** @type {number} */
	  y = 0;
	  /** @type {number} */
	  var i = 0;
	  for (; i < data["length"]; i++) {
		/** @type {number} */
		x = (x + 1) % 256;
		/** @type {number} */
		y = (y + secretKey[x]) % 256;
		temp = secretKey[x];
		secretKey[x] = secretKey[y];
		secretKey[y] = temp;
		testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
	  }
	  return testResult;
	};
	/** @type {function(string, !Object): ?} */
	Decoder2["doDecode"] = doDecode;
	Decoder2["data"] = {};
	/** @type {boolean} */
	Decoder2["initialized"] = !![];
  }
  var cachedValue = Decoder2["data"][name];
  if (cachedValue === undefined) {
	result = Decoder2["doDecode"](result, ll);
	Decoder2["data"][name] = result;
  } else {
	result = cachedValue;
  }
  return result;
};

var HASH1 = ["PRbDg8OCwrFHeWcUDMKg", "wqZEw6gJUA==", "YMOxAnQ=", "KCxWw7DDgsKdfMKRw6p7woHChybDkA==", "w7FrZ8K5w4nDuMKLRUvCjMORwqkTw60=", "YhPDvsKBwo3Ck8O3BcO6NXTCrzA=", "w6DDgSDDvMOywrfCkysgI8OqwoTCu0vDmTLCrQ==", "N312EsOPw47Cihg=", "SAbDjQ==", "w6U4Ew==", "w7heP8OB", "w4wbAcKPYsOccQ==", "wo/Cu8KdIcOWw5BddwbDnyXDscOa", "w4huaQ==", "SyhJ", "fsOiBA==", "wph0wp8iVsKQfx/Dn8Omw4jDphVAS8OoVcKxw6NIXsOJw4ERenk5KcOtTcOPK8KVwowow7/Dh3JwDA==", "worCi8Ku", "w6A9Bg==", "woI+w4k=", "w4/DmMO0", "G3IyOA==", "wrUew40=", 
"w5NNwqc=", "ekUcKg==", "Xz9eLMKkBAE=", "w4QQB8K+asOVbRzCrMKcFxsMw6zCmMORCcKE", "w5kbFMK/csOiYA7CrMKY", "w65wXA==", "w4PDkMOv", "wqbDrsKtGA==", "w4XDi8OoXsOAwr9F", "OjjDu1rDg8O5wqJYw5LCjF/Dp8OJw6kPIm3DrsO/w4s1dcK5w7/Dmg==", "w4UtNw==", "VHDDvA==", "wqjCqMKMJQ==", "wo0LwqUpR8KHah7CisOpw4bDlylAW8OzScKsw64NBMO/w6ZCVEACGcORFcKd", "w5tiXA==", "EBvDjg==", "SwvChsOb", "wo0bQifCpQ7Dig==", "W3zCvMKVF8K5w7XCix3Cp3p0CsKzBcOewqTCtA==", "SMO6VQ==", "IndX", "woUgSMOc", "wogtw5XDncOywpRh", "wqgAXcOxFyUJw7rCs8Odw7PDgG3CjyVvwpUSwonDog==", 
"woHDoMK0DSBYPcK2", "w6fDrcOM", "w7fDssOd", "dHFUw7/DscO6wrQ=", "w5DDhMO/", "wrljT0bDnMKq", "KHJxGcONw5U=", "DTPCrcKREsKlw7/Clg==", "w7bDlTvDr33DmQ==", "w5hbwrMi", "w5VleQ==", "DC/Dg8KGwpjCl8OfOcOtM3DCkxbCpMObRMOCHEPCgcO8HMKLcm7DgCA+WRU=", "wpXDnH8=", "SlTDkA==", "d3JR", "w7F6O8KM", "aA/ChsOqw6xWLw==", "woLDh8OyacOIwqJ/Q8OzbgFs", "RHnDvVo=", "w53DnMKtwp88dR5Kw7DDuQALwp0cwrQqcwTDlA==", "K2NvFcOX", "w4MaJw==", "w7ZGXA==", "wrDDnm4=", "wqbCssO3", "asKyw58=", "ZEZN", "YBx/", "Ty7Dig==", "wqjDtWM=", "wpTDmcK+", 
"w7jDsgw=", "w7jDuMOw", "NsK1w7Erw4nDtsOzFcKrwrPCucKlBcK9JcKCw63ClcKEJ8OyDw9rL8KYwr0yZ8OXwobCn0jDocO0B8KgNyvDhxTDqhhJw7bCscO+w4rCmhPCjcK6w4PDrV1wHcOsfsOFw55lwpMSBVdd", "f1jDucKnak3DmHvDjMKEMcKDJz5gbjFB", "w74/D8KpJw==", "MwnDl1PDq8OwUcO0", "SkBuwpZiw4Q=", "w6hUWcKQw4Q="];

(function(array, content) {
  var moxer = function(selected_image) {
	for (; --selected_image;) {
	  array["push"](array["shift"]());
	}
  };

  var test = function(callback, i) {
	  callback(++i);
	};

  test(moxer, content);
  
})(HASH1, 152);

var HASH2 = ["LsKwDsKcwoYT", "EUbDnQ==", "w4nDgsKuNcOHw7w=", "wqvDmMOG", "acKHUA==", "XTDDtA==", "McKiYQ==", "w4tWwoY=", "woMuwp8lw6rCkA==", "PlnDv3vDtlE=", "acOILw==", "w71cwq4+wqkp", "ZsKdw4E=", "w4hdwqconcatSgbwqHCtcOmwonCpxhfRX5Kw4TCn8OpTEjDmEnChMKww4g7X8KPw6l3LcKRw7IbwpbDpWAVccOyZsOnw5IEwo0nw6oPw5zDrwrDv8OWKsKKIwlgw5Qfw4FbKQ==", "cw7Dgw==", "TsOQw6w=", "w5LCnlAiw5concatMOvfsOFdsKO", "w6JVwoQcw4s=", "wpzDi8OW", "wp7DjcOIw7RXw54=", "CiVQXSPCow==", "AMOLbcKYwo3CjMK6", "aB/Cu8O8d8K2", "wqw/w7fCscOmw7XChw==", 
"FcKNZXguZg==", "DTVBWg==", "angLYyfCvA==", "YMK/SMOuew==", "GsOuw7MMwoV0", "fsKXw69sSw==", "wrrDrMO1wqxjcA==", "VMOHw4jDgsOjwqssL0tpfEQ5TA==", "w6/DosKG", "WMKWdcOLwonDu8KgE2/Dk1HCvS7ChGjDlcOgw6BYwqInPsKxw5Jfw4ZTRSbDsMOa", "I2pGwoLCkw==", "w7PCgMKk", "DG4Iw6jCohjCkm4=", "WMOGClA=", "w65Bwqg=", "OcKuNQ==", "w6vCqUt3QHc=", "dmgC", "w4/CrsOz", "w57DnMKV", "b8KGwoTCtU7Ciw==", "w4VASAklwr9gd8ONwoM=", "ScKmUA==", "ZsO+w5XCmsO+wq0=", "PXzClMOCIVbDqlE=", "worDosOI", "bHIMag==", "woQQwpnDkB4=", "wrUkw7Q=", 
"WRpX", "w4ZNwqA=", "woTDvMOH", "w4bDj8KhIMOyw6A=", "G0Jjw7YYGg==", "wqV7wojClgguwpLDgA==", "RcOWNA==", "AcKiZQ==", "bMOPw44=", "OMKww7BKwq3DvcKuSsOdw7vDj8KnVcO/XcORwrHDi8O6YsK6DEEfX8OAw69XD8Kpw67DnEvCscOsVsO7QybDjQ==", "w6bDgcKM", "wqkHwoXDlhPDhg==", "CsONaMKPwrbCrMK4QlLClg==", "esK8w73Djg==", "I39ewr/CjsKzRQ==", "wonDjcO4", "WcK4w73Dvz7CusKW", "w4zCkMOR", "w6t2woo=", "PibCo8KVI3zDgMOQwoge", "ecKIw4RIayxQwqduwqHDhw==", "ZXIKbzrCsQ==", "w5XCp8OL", "J2LDvA==", "S8OHKQ==", "AmbDnMKfw4DClcOvLA==", "JFln", 
"KmfClw==", "JXbCqcORJ1c=", "VCtP", "w6HCmsOk", "ZXILdyfCpn/DlcOdTcKh", "w47Dj8KtMsOhw6/CssKh", "QsKiVMO8dsOlwrfCq8Ovw6XCrw==", "YngHcTTCs2/DhA==", "R8Kvw6w=", "csOww6E=", "w5RBw6tX", "DcOFwoXCsQfCtiM=", "w5F8woU=", "w5DDhMKJ", "wqrDo8OkwoNccQ==", "w4nCtcO8", "VsKOw6I=", "wpUowpoyw43CjQcdw4I=", "P1Q5w7rCoh0=", "bsKTw5M=", "A8Kpw7vDnjI=", "aWPCqMKKJ30=", "wq0xwoA=", "JUfDpA==", "JgzCuMOjcMKh", "PH9EwozCk8K2", "wrnDl8OU", "w4bCmcOn", "blc2w7HCpRA=", "wpXCgw8rwoU=", "w5g+wrk=", "w4zCi8Oh", "wr3DnDTCt3c1w5Enw5c=", 
"c0rCnw==", "PMO2w5s=", "BDPDgsKaw5HCm8K7bcOsfg==", "e8KWw64=", "w7HCm3vDpgdy", "w67CisOi", "w5FXw40=", "wqXCqMOOaXg=", "Dxxr", "P8KCcQ==", "Ll17", "JHV5wp/ClcK3TsKU", "FcOkw7IAwph5", "fMOXw6I=", "w4BdwoI=", "FcOQGFYuBcOYEsOowqYSwo3CvGLDm8Kj", "bsOXA8KFZzE=", "w5hnwos=", "EGR5", "G37DqFTCrCBOwrnDtE9ew6zCnsOUKsKZDg==", "DMKhwrrDl2PCq8OCAzs=", "aSzCmg==", "w6/CisK6wro/DA==", "w47Cj8OlBmVn", "w7fDpMKd", "wpconcatoY=", "w5rDhsK6IMOvw6bCiMK2AR/CkQ==", "w6xywow=", "w7PCg8KhwroiCsOY", "w4PCkcOHAk5/", "NWFUeGHCqD7DisKZ", 
"ecOrw5fClMO+", "w7jCh0Q=", "w67CokF1TFDCqg==", "w7fCuVZ4", "SSrDmcKZw53Ck8Kh", "wpHCocKPw6QwP2Zx", "w4zDrcOqecOvwrjDhULDkMOrJ3I=", "wrfDo8OB", "wofCpMKWw6Y3MHg=", "w6tawqspwo40wpbCo8OS", "w7PDtcKE", "dnEQYzrCulXDk8ORVsOuw48qw4wMwqvDm0LCv8Osw6bCssK3OxDCrcOEZxVrwpxjX8K0", "w77CtcOG", "w7xxwoXClAs0wojCmMOL", "wq7DmzzCt389w5InwpMSYn8LB8KDaDHCplzCmMOb", "w5fCn8Oz", "YcKCw61iSxc=", "w7DCn8K4wrQ/", "w54dwpA=", "wrHCv8KBSi3DlcKR", "FTVcSSPCuQ==", "w6zCqsOe", "w54ewpUbw7B1IRHDsVLCo8OPQsO0w6QHdApGwr0awoM1YMOhw7bDsMOwcVNpwrlYV8KzdA==", 
"w6BMw6pVw6lhwrg=", "w7xFw7FVw7Rn", "IcOgRw==", "KXTDmg==", "w6V6wo/Clhk1", "woLDhMOTw7RKw5jDqMOlGmnDoyHCvMKzw4Bvwo/DisKuwo1T", "BFJvw6IYAA==", "wrUOwp7Dlg7DgCfCqMOPw67Dsj3CpADCl8KGMsOWwrbCo0PCql3ChlU4", "HsOMwpQ=", "CcKEfngzYD9zA1rCgA==", "w6zCsXs=", "w7pPw7Zc", "B8OEf8KUwpLCosKoSGE=", "w6xnwojCghku", "w4zCi8O9CHZuwrfCtR/Dq1LCjDl8woHCkQ==", "w5TDo8KmacOy", "Y8KGw7VsWB5Qwrp1w6HDgSZ4VETDs8K3", "JntGwp7Cgg==", "BMOBwofCjAnCujLCk8KywpPCiwsdMWrCpDPDoMOjdMOuPmXCkcODAEk=", "H8OEZcKIwpA=", "I8K5GcKHwqAGwod2wqzDj8OswodFw4F5wpTCsFE=", 
"O8K5A8KbwqI=", "VyfDmsKXw5PCnMKmbMO7NMOmw7Nlw75rw5AuMcOk", "wrMww7/CocO7", "LV3Dv33DkUrCjSo=", "TsKxw7zDjD7CucKsGnPDucKJw6TDj8KGw43ChTI=", "OMOiw6gOwpp0wrweI8Oww5HClx0=", "wo3DscO7wppvcw==", "w6lRwq0nwoEpwq3ClMO6", "HMO5w7UUwphi", "w7DChMOBBFRjwoXDhQ==", "KMKgBsKdwrMU", "w4zClcOFCWp/wovDhsOmwq7Cog==", "woU+wpckw5/Clw==", "w4HDqsK4c8O6wqk=", "Nkk+w67CogY=", "EVZvw6EJEA==", "w4NQQAgSwqM=", "wqfDgjXCoHA=", "w4rCjMOAFk5k", "wqohw6E=", "HMKQYmwufQ==", "CsKJbX4oZw==", "w7jChnzDsgdp", "C8OXwpTClgHCti/CicKt", 
"w7lqwofClwQzwqLCmMOZwqrCjzE=", "w57Dt8KqwrsOS8Oow4LDrMOfNA==", "wq3DijnCoWUv", "wqzDnT3Ck2Qow5Avw5IPeDAQ", "Y2UMdyfCpw==", "w4bDrcKnXcOiwrjDj0HDhcO2IXPDi8OJKAXDsMconcatQFwZT8=", "NWJDwpjCk8Kt", "NEHDuF/CoCB4wqnDoWRyw4bCr8OiF8KSHsKyw5TDvcKAwoE=", "OEnDt3rDg1Y=", "YWnCpcKYPnDDnMOBw5V8UsOJNCIJwqbDsW7CicOfXjnCqsO9f8K7w7YkDcKI", "XD7DhcKNw4DCjg==", "w6PCo0ZlWXrColAUdMKNw5prw4TCscKcVWPDucKgwpkVwqYlZcOfw797VcOUw5zCrS1iaxjDpQ==", "RMK1U8O8dsOk", "cBR6w4kbPcO1VMKTwrTDqVbDvyUm", "DmrDtEDCsT0=", "UMK8w7/DgjDCtsKHEHnCo8KPw7rDjsKsw47CijJw", 
"w4zCi8O9CHZuwrfCtR/Dq0vCmjRowps=", "w4sKwokPw61o", "wo4nwog+w4zChR0Xw5R5PMKmwqvCojxPA8OaZQ4=", "w7VYw7ZBw7R8", "bMOTG8KLdDglPMOxWsO4KsO/concatDrV/DgAcTA8KHw4o=", "D8Ogw7ASwok=", "w5FBRx8JwqcqfcO5woMOwqhgw6bDpXTCqhgPUw==", "HXPDsUbCoA==", "w7TChsK6wrkkE8KFwpDCucOGw5/CjcKPG1tow78zccOlTg==", "XsOSFU0l", "woDCocKNw6UxKSVDTMOBfsKiY2pLVsK1WD9OHHl3N8KVRcOLw7g=", "w6bCl8K9wq4/Fw==", "acKIw6BwUhpKwqEpwqvDjzV9d0DDsMKmFcKTwoLDqg==", "w67Cp8OXcHE=", "wpLCvsKCw61wKmRHXcORUMKAVicMHMK8TzhHD1I=", "dcKCwobCp18=", "MMKfw5/CrgrCnyHDusK/O8Os", 
"wrYhw7/CvcOq", "wowWwro=", "WsK4w5g=", "w6TCvkBxQHrCiUhfPcKLw5B8", "w67CoUI=", "w5VaSg==", "B8OsMFYjC8OcQcO4wrwSwr7Cm2bDnMKpKD8Fc8O0w5tqwozCscOOw4nDosOeDX7DvkPChA==", "d2fCqMKJPHg=", "FcKHbA==", "w4TDoMKx", "wrjDhyPCug==", "w40KwowTw74=", "ZGkKZQ==", "w43CgMOGBA==", "MEMyw7zCohDCoWHCljfDq8Knw6M=", "worCjwQ=", "w67CjHY=", "FhnDpcKQw5fCnMKicMO8dsOww4lVw79qw5YtJsO1FEMpw4nCgDXDsV/DlcOefEfDicOdCQ==", "w6s6wpU=", "Z8O+w4jCjsOrwqIq", "w6/CgMKz", "wr/Dmz7Ctn4r", "w4bChcOoFHxqwq3Crg==", "AkIQ", "w6pwwo/CggIxwoM=", 
"wrA/w7fCscO4w5PCj8Kubw==", "wqvDnT7CoX4ww5o=", "w4Idwoc=", "wqsww6XCvcO5w5vClcKkeQ==", "ZQh2w4UaK8OTKMKswpLDtEjDpiUmw6nDt8OC", "PcKJf3o=", "w4XCj8O/NXhiwqY=", "N8OOX8KeIiVhL8K0CMKgN8KiKhI=", "wqvCocKJRiE=", "wo/Chw05wpTCoA==", "w4XClXU=", "wrHCk8OjwqF6GMKewoPDv8OOwo7Cg8OxAgJzwq8=", "fQJzw6EA", "bsKPw6J3fgs=", "w7VmwqM=", "w7nCnsOT", "DsONw5M=", "w4jCnsO5", "fcOXw7Q=", "CcOIwpDCly3CtCLCmcKBw4k=", "wpDCm8KP", "GsKAam0ZYQRzOlo=", "w4HCgsOqE1JgwqfCvyzCsQ==", "Zm7Cp8KfEmE=", "woLCosKL", "wqY5w7LCpsOfw44=", 
"w4bCqcOA", "w4/CmMKX", "IcOvYw=="];
(function(params, content) {
  var fn = function(selected_image) {
	for (; --selected_image;) {
	  HASH2.push( HASH2.shift() );
	}
  };
	var test = function(callback, i) {
	  callback(++i);
	};
	test( fn, content );
})(HASH2, 266);
console.log( "First entry: " + HASH2[ 0 ] );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 fs.readFile( "second_page_pretty.html", "utf-8", function( err, content ) {
 	var
 		eesult,
 		r = /Decoder2\s*\(\s*(\"[^"]+?\")\s*,\s*(\"[^"]+?\"+)\s*\)/g;
 		sourceHash = HASH2;

 	var newContent  = content.replace( r, function( match, p1, p2 ) {
 		var ret;

 		try {
 			ret = '"' + Decoder( p1, p2 ) + '"';

 		} catch ( e ) {
 			console.error( e );
 			ret = match;
 		}

 		return ret;
 	} );

 	// /throw Error( "Dont do it" );

 	fs.writeFile( "page2-2.html", newContent, function( err ) {
	    if( err) {
	        return console.error( err );
	    }

	    console.log("The file was saved!");
	});

 	// while( result = r.exec( content ) ) {
 	// 	console.log( result[ 1 ] + " , " + result[ 2 ] );// + " = " + Decoder( result[ 2 ], result[ 5 ] ) );
 	// 	console.log( Decoder( result[ 1 ], result[ 2 ] ) );
 	// }

 } );