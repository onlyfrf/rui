onload = function() {
	//下拉菜单节点
	var list = document.getElementById("list");
	var a = document.getElementsByName("a");
	var list2 = list.getElementsByTagName("ul");
	//手机地区选择节点
	var option1 = document.getElementById("option");
	var option2 = option1.getElementsByTagName("div");
	var shouji = document.getElementById("shouji");
	//协议节点
	var zg = document.getElementById("zg");
	var consent = document.getElementById("consent");
	//步骤节点
	var buzhou = document.getElementById("buzhou");
	var oli = buzhou.getElementsByTagName("li");
	var oi = buzhou.getElementsByTagName("i");

	//判断手机号码节点
	var shouji_inp = document.getElementById("shouji_inp");
	var panduan = document.getElementById("panduan");
	var pd_i = panduan.getElementsByTagName("i")[0];
	var pd_span = panduan.getElementsByTagName("span")[0];
	//判断验证节点
	var yz_jd = document.getElementById("yz_jd");
	var yz_jd_1 = document.getElementById("yz_jd_1");
	var yz_span1 = document.getElementById("span1");
	var yz_span2 = document.getElementById("span2");
	var yz_p1 = document.getElementById("yz_p1");
	//点击下一步节点
	var bnt_1 = document.getElementById("bnt_1");
	var szyhm_1 = document.getElementById("szyhm_1");
	//验证手机节点
	var a_1 = document.getElementById("a_1");
	var yzm = document.getElementById("yzm");
	var shoujihao = document.getElementById("shoujihao");
	var yanzhengma = document.getElementById("yanzhengma");
	var yzm_hq = document.getElementById("yzm_hq");
	var yzm_jieshou = document.getElementById("yzm_jieshou");
	var p_1 = document.getElementById("p_1");
	var i_1 = document.getElementById("i_1");
	var bnt_2 = document.getElementById("bnt_2");
	//填写信息节点
	var tianxie = document.getElementById("tianxie");
	var shoujihao1 = document.getElementById("shoujhao1");
	//填写用户信息节点
	var mm_1 = document.getElementById("mm_1");
	var mm_2 = document.getElementById("mm_2");
	var dlm_1 = document.getElementById("dlm_1")
	var bnt_3 = document.getElementById("bnt_3");
	var tx = document.getElementsByName("a1");
	var tx_3_i = document.getElementById("tx_3_i");
	var tx_3_p = document.getElementById("tx_3_p");
	var tx_4_i = document.getElementById("tx_4_i");
	var tx_4_p = document.getElementById("tx_4_p");
	var tx_6_i = document.getElementById("tx_6_i");
	var tx_6_p = document.getElementById("tx_6_p");
	//设置支付方式节点
	var zffs = document.getElementById("zffs");
	var zf_inp = zffs.getElementsByTagName("input");
	var bnt_4 = document.getElementById("bnt_4");
	var tioaguo = document.getElementById("tiaoguo");
	//拖动小蜜事件节点
	var xiaomi = document.getElementById("xiaomi");


	//下拉菜单
	for (var i = 0; i < a.length; i++) {
		a[i].index = i;
		a[i].onmouseover = function() {
			list2[this.index].style.display = "block"
		}
		a[i].onmouseout = function() {
			list2[this.index].style.display = "none"
		}
	}
	//手机号码地区选择的显示隐藏
	var k = 0
	shouji.onclick = function() {
			k += 1;
			if (k % 2 != 0) {
				option1.style.display = "block";
			} else {
				option1.style.display = "none";
			}
			return k;
		}
		//手机号码地区隐藏
	option1.onclick = function() {
			option1.style.display = "none";
			k++;
		}
		//选择手机号码所在地区
	last = option2[0];
	option2[0].style.background = "#FF4400";
	option2[0].style.color = "white";
	for (var i = 0; i < option2.length; i++) {
		this.index = i;
		option2[i].onclick = function() {
			shouji.innerHTML = this.innerHTML;
			last.style.background = "white";
			last.style.color = "black";
			this.style.background = "#FF4400";
			this.style.color = "white";
			last = this;
		}
	}
	//是否同意协议，同意则继续下面的步骤
	oi[0].style.background = "#FF4000";
	consent.onclick = function() {
			zg.style.display = "none";
			oli[0].style.borderBottom = "2px solid #ff4700";
		}
		//小蜜拖动

	xiaomi.onmousedown = function(evt) {
			var e = evt || event;
			var x = e.clientX;
			var y = e.clientY;
			var a = x-xiaomi.offsetLeft;
			var b = y-xiaomi.offsetTop;

		document.onmousemove = function(evt) {
			var e = evt || event;
			var x1 = e.clientX;
			var y1 = e.clientY;
			if(x1-x<0&&x1>35){

				xiaomi.style.left=x1-a+"px";
			}
			
			if(y1-y<0&&y1>44){

				xiaomi.style.top=y1-b+"px";
			}
			if(x1-x>0&&x1<1400){

				xiaomi.style.left=x1-a+"px";
			}
			if(y1-y>0&&y1<720){

				xiaomi.style.top=y1-b+"px";
			}
			
		}
		document.onmouseup = function() {
			document.onmouseup = null;
			document.onmousemove = null;
			var a = xiaomi.offsetLeft;
			var b = xiaomi.offsetTop;
			var arr = [a, b];
			setCookie("xy", arr);
		}
	}

	//手机号码输入框失去焦点时判断
	shouji_inp.onblur = function() {
			if (shouji_inp.value == "") {
				pd_i.innerHTML = "×";
				pd_span.innerHTML = "请输入手机号码"
				pd_i.style.background = "red";
				panduan.style.display = "block";
			} else if (shouji_inp.value.length < 11 || shouji_inp.value.length > 11) {
				pd_i.innerHTML = "×";
				pd_span.innerHTML = "手机号码格式不正确，请重新输入"
				pd_i.style.background = "red";
				panduan.style.display = "block";
			} else if (shouji_inp.value.length = 11) {
				pd_i.innerHTML = "√";
				pd_span.style.display = "none";
				pd_i.style.background = "green";
				panduan.style.display = "block";
			}
		}
		//拖动验证条
	yz_span1.onmousedown = function(evt) {
			var e = evt || event;
			var x = e.clientX;
			document.onmousemove = function(evt) {
				var e = evt || event;
				var x1 = e.clientX;
				//往左拖
				if (x1 - x <= 0) {
					yz_span1.style.left = 0 + "px";
				}
				//往右拖
				if (x1 - x > 0) {
					yz_span1.style.left = x1 - x + "px";
					yz_jd_1.style.width = x1 - x + "px";
					if (x1 - x > 319) {
						yz_span1.style.left = 319 + "px";
						yz_span1.style.display = "none";
						yz_span2.style.display = "block";
						yz_p1.style.display = "none";
						yz_jd_1.innerHTML = "验证通过";
						bnt_1.style.background = "red";
						bnt_1.style.color = "white";
						//点击下一步后判断条件是否满足
						bnt_1.onclick = function() {
							if (shouji_inp.value == "") {
								pd_i.innerHTML = "×";
								pd_span.innerHTML = "请输入手机号码"
								pd_i.style.background = "red";
								panduan.style.display = "block";
							} else if (shouji_inp.value.length < 11 || shouji_inp.value.length > 11) {
								pd_i.innerHTML = "×";
								pd_span.innerHTML = "手机号码格式不正确，请重新输入"
								pd_i.style.background = "red";
								panduan.style.display = "block";
							} else if (shouji_inp.value.length = 11) {
								pd_i.innerHTML = "√";
								pd_span.style.display = "none";
								pd_i.style.background = "green";
								panduan.style.display = "block";
								yz_span1.style.display = "block"
								yz_span2.style.display = "none"
								yz_jd_1.innerHTML = "";
								yz_p1.style.display = "block";
								yz_span1.style.left = 0 + "px";
								yz_jd_1.style.width = 0 + "px";
								szyhm_1.style.display = "none";
								yzm.style.display = "block";
								setCookie("phone", shouji_inp.value);
								if (getCookie("phone")) {
									shoujihao.innerHTML = getCookie("phone");
									shouji_inp.value = getCookie("phone");
									shoujihao1.innerHTML = getCookie("phone");
								}
							}
						}
					}
				}
			}
			document.onmouseup = function(evt) {
				var e = evt || event;
				var x2 = e.clientX;
				if (x2 - x > 0 && x2 - x < 319) {
					yz_span1.style.left = 0 + "px";
					yz_jd_1.style.width = 0 + "px";
				}
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
		//手机验证码验证

	var num1 = Math.floor(Math.random() * 10);
	var num2 = Math.floor(Math.random() * 10);
	var num3 = Math.floor(Math.random() * 10);
	var num4 = Math.floor(Math.random() * 10);
	yzm_jieshou.innerHTML = num1 + "" + num2 + num3 + num4;
	yzm_hq.onclick = function() {
		num1 = Math.floor(Math.random() * 10);
		num2 = Math.floor(Math.random() * 10);
		num3 = Math.floor(Math.random() * 10);
		num4 = Math.floor(Math.random() * 10);
		yzm_jieshou.innerHTML = num1 + "" + num2 + num3 + num4;
	}
	bnt_2.onclick = function() {
		if (yanzhengma.value != yzm_jieshou.innerHTML || yanzhengma.value == "") {
			i_1.style.background = "#FF3F13";
			p_1.style.color = "#FF3F13";
			i_1.innerHTML = "×";
			p_1.innerHTML = "校验码不正确，请重新输入";
		} else {

			yzm.style.display = "none";
			oi[1].style.background = "#FF4000";
			oli[1].style.borderBottom = "2px solid #ff4700";
			tianxie.style.display = "block";

		}
	}
	a_1.onclick = function() {
		yzm.style.display = "none";
		szyhm_1.style.display = "block";
	}
	mm_1.onblur = function() {
		tx[0].style.display = "block";
		if (mm_1.value == "" || (mm_1.value.length > 6 && mm_1.value.length < 16)) {
			tx_3_i.innerHTML = "×";
			tx_3_p.innerHTML = "密码设置不符合要求";
		} else {
			tx_3_i.innerHTML = "√";
			tx_3_i.style.background = "green";
			tx_3_p.innerHTML = "";
		}
	}
	mm_2.onblur = function() {
		tx[1].style.display = "block";
		if (mm_2.value == "") {
			tx_4_i.innerHTML = "×";
			tx_4_p.innerHTML = "密码不能为空";
		} else if (mm_1.value != mm_2.value) {
			tx_4_i.innerHTML = "×";
			tx_4_p.innerHTML = "两次密码不一致";
		} else {
			tx_4_i.innerHTML = "√";
			tx_4_i.style.background = "green";
			tx_4_p.innerHTML = "";
		}
	}
	dlm_1.onblur = function() {
		tx[2].style.display = "block";
		if (dlm_1.value == "" || (dlm_1.value.length > 5 && dlm_1.value.length > 25)) {
			tx_6_i.innerHTML = "×";
			tx_6_p.innerHTML = "5-25个字符，推荐使用中文，请勿包含姓名/身份证/银行卡等隐私信息，一旦设置成功无法修改";
		} else {
			tx_6_i.innerHTML = "√";
			tx_6_i.style.background = "green";
			tx_6_p.innerHTML = "";
		}
	}
	bnt_3.onclick = function() {
			if (tx_3_i.innerHTML == "√" && tx_4_i.innerHTML == "√" && tx_6_i.innerHTML == "√") {
				tianxie.style.display = "none";
				oi[2].style.background = "#FF4000";
				oli[2].style.borderBottom = "2px solid #ff4700";
				zffs.style.display = "block";
			}
			if (mm_1.value == "" || (mm_1.value.length > 6 && mm_1.value.length < 16)) {
				tx[0].style.display = "block";
				tx_3_i.innerHTML = "×";
				tx_3_p.innerHTML = "密码设置不符合要求";
			} else {
				tx_3_i.innerHTML = "√";
				tx_3_i.style.background = "green";
				tx_3_p.innerHTML = "";
			}
			if (mm_2.value == "") {
				tx[1].style.display = "block";
				tx_4_i.innerHTML = "×";
				tx_4_p.innerHTML = "密码不能为空";
			} else if (mm_1.value != mm_2.value) {
				tx_4_i.innerHTML = "×";
				tx_4_p.innerHTML = "两次密码不一致";
			} else {
				tx_4_i.innerHTML = "√";
				tx_4_i.style.background = "green";
				tx_4_p.innerHTML = "";
			}
			if (dlm_1.value == "" || (dlm_1.value.length > 5 && dlm_1.value.length > 25)) {
				tx[2].style.display = "block";
				tx_6_i.innerHTML = "×";
				tx_6_p.innerHTML = "5-25个字符，推荐使用中文，请勿包含姓名/身份证/银行卡等隐私信息，一旦设置成功无法修改";
			} else {
				tx_6_i.innerHTML = "√";
				tx_6_i.style.background = "green";
				tx_6_p.innerHTML = "";
			}
		}
		//登录名传递
	$(".wczc_2_1").html($("#shoujhao1").html());
	//点击跳过
	tioaguo.onclick = function() {
		zffs.style.display = "none";
		oi[3].style.background = "#FF4000";
		oli[3].style.borderBottom = "2px solid #ff4700";
		$("#zc_big").css("display", "block");
		$(".wczc_2_1").html($("#shoujhao1").html());
		$(".wczc_3_1").html($("#shoujhao1").html());
		$(".wczc_4_1").html($("#shoujhao1").html());
	}
	bnt_4.onclick = function() {
		if (zf_inp[6].checked && $("#sfz span").html() == "√" && $("#yhk span").html() == "√" && $("#sjh span").html() == "√" && $("#zfmm_1 span").html() == "√" && $("#zfmm_2 span").html() == "√") {
			zffs.style.display = "none";
			oi[3].style.background = "#FF4000";
			oli[3].style.borderBottom = "2px solid #ff4700";
			$("#zc_big").css("display", "block");
			$(".wczc_2_1").html($("#shoujhao1").html());
			$(".wczc_3_1").html($("#shoujhao1").html());
			$(".wczc_4_1").html($("#dlm_1").html());
		} else {
			if (zf_inp[1].value.length != 18) {
				$("#sfz").css("display", "block");
				$("#sfz span").html("×").css({
					"background": "red",
					"color": "white"
				});
				$("#sfz p").html("身份证号有错，请重新输入").css({
					"background": "",
					"color": "red"
				});
			} else {
				$("#sfz").css("display", "block");
				$("#sfz span").html("√").css({
					"background": "blue",
					"color": "white"
				});
				$("#sfz p").html("");
			}
			if (zf_inp[2].value.length != 19) {
				$("#yhk").css("display", "block");
				$("#yhk span").html("×").css({
					"background": "red",
					"color": "white"
				});
				$("#yhk p").html("银行卡号有错，请重新输入").css({
					"background": "",
					"color": "red"
				});
			} else {
				$("#yhk").css("display", "block");
				$("#yhk span").html("√").css({
					"background": "blue",
					"color": "white"
				});
				$("#yhk p").html("");
			}
			if (zf_inp[3].value.length != 11) {
				$("#sjh").css("display", "block");
				$("#sjh span").html("×").css({
					"background": "red",
					"color": "white"
				});
				$("#sjh p").html("手机号有错，请重新输入").css({
					"background": "",
					"color": "red"
				});
			} else {
				$("#sjh").css("display", "block");
				$("#sjh span").html("√").css({
					"background": "blue",
					"color": "white"
				});
				$("#sjh p").html("");
			}
			if (zf_inp[4].value.length == "") {
				$("#zfmm_1").css("display", "block");
				$("#zfmm_1 span").html("×").css({
					"background": "red",
					"color": "white"
				});
				$("#zfmm_1 p").html("密码不能为空！").css({
					"background": "",
					"color": "red"
				});
			} else {
				$("#zfmm_1").css("display", "block");
				$("#zfmm_1 span").html("√").css({
					"background": "blue",
					"color": "white"
				});
				$("#zfmm_1 p").html("");
			}
			if (zf_inp[4].value != zf_inp[5].value) {
				$("#zfmm_2").css("display", "block");
				$("#zfmm_2 span").html("×").css({
					"background": "red",
					"color": "white"
				});
				$("#zfmm_2 p").html("密码不一致").css({
					"background": "",
					"color": "red"
				});
			} else {
				$("#zfmm_2").css("display", "block");
				$("#zfmm_2 span").html("√").css({
					"background": "blue",
					"color": "white"
				});
				$("#zfmm_2 p").html("");
			}
		}
	}

}