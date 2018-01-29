onload = function() {
	//获取元素节点
	var denglu_saoma = document.getElementById("denglu_saoma");
	var denglu_mima = document.getElementById("denglu_mima");
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var erweima = document.getElementById("erweima");
	var oimg = erweima.getElementsByTagName("img");
	var list1 = document.getElementById("denglu_foot_denglu");
	var list1_a = list1.getElementsByTagName("a");
	var inp = document.getElementsByTagName("input");
	var bnt1 = document.getElementById("bnt1");
	var jinggao = document.getElementById("jinggao");
	var bt = document.getElementById("bt");
	//点击显示密码登录
	one.onclick = function() {
			denglu_saoma.style.display = "none";
			denglu_mima.style.display = "block";
		}
		//点击显示扫码登录
	two.onclick = function() {
			denglu_saoma.style.display = "block";
			denglu_mima.style.display = "none";
		}
		//点击显示密码登录
	list1_a[0].onclick = function() {
			denglu_saoma.style.display = "none";
			denglu_mima.style.display = "block";
		}
		//鼠标移动到二维码上，二维码位置移动并显示图片提示
	erweima.onmouseover = function() {
			startMove(oimg[0], "left", -30, 10, function() {
				oimg[1].style.display = "block";
			});
			erweima.style.width = 254 + "px";
		}
		//鼠标移开后恢复原状
	erweima.onmouseleave = function() {
			oimg[1].style.display = "none";
			startMove(erweima, "width", 139, 10)
			startMove(oimg[0], "left", 0, 10);
		}
		//判断cookie是否存在用户名
	if (getCookie("name")) {
		inp[0].value = getCookie("name");
	}
	//点击登录按钮后记住用户名
	bnt1.onclick = function() {
		//					setCookie("pass",inp[1].value);
		//判断用户名是否有值，有则将值存入cookie
		if (inp[0].value != "") {
			setCookie("name", inp[0].value);
		}

		//判断用户名有值否
		if (inp[0].value == "" && inp[1] != "") {
			jinggao.style.display = "block";
			bt.style.display = "none"
			var jg_p1 = document.getElementById("jg_p1");
			jg_p1.innerHTML = "请输入账户名"

		} else if (inp[1].value == "" && inp[0] != "") {
			jinggao.style.display = "none";
		}
		//判断密码有值否
		if (inp[1].value == "" && inp[0] != "") {
			jinggao.style.display = "block";
			bt.style.display = "none"
			var jg_p1 = document.getElementById("jg_p1");
			jg_p1.innerHTML = "请输入密码"

		} else if (inp[1].value != "" && inp[0] == "") {
			jinggao.style.display = "none";
		}
		//判断用户名和密码是否都有值
		if (inp[0].value == "" && inp[1].value == "") {
			jinggao.style.display = "block";
			bt.style.display = "none"
			var jg_p1 = document.getElementById("jg_p1");
			jg_p1.innerHTML = "请输入账户名和密码"

		} else if (inp[0].value != "" && inp[1].value != "") {
			location.href = "shouye.html";
		}

	}


}