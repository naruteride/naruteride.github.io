// // 만약 글쓰기 form의 submit이 동작한다면, 해당 form에 formdata이벤트를 발생시킴
// let signUpForm = bottomDrawer.querySelector("#SignUp .form-box");
// signUpForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   new FormData(signUpForm);
// });

// // 만약 회원가입 form의 formdata 이벤트가 발생한다면,
// signUpForm.addEventListener("formdata", (e) => {
//   signUp(e.formData);
// });

// // 회원가입 함수
// function signUp(values) {
//   document.querySelector("#loading-cover").classList.add("on"); // 로딩창

//   console.log("사랑해~~~");
//   console.log(JSON.stringify({
//     email: values.get("email"),
//     nickname: values.get("nickname"),
//     password: values.get("password"),
//     is_agreed: values.get("is_agreed"),
//   }))

//   fetch(
//     "https://server.mugip.com/auth/signup",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         email: values.get("email"),
//         nickname: values.get("nickname"),
//         password: values.get("password"),
//         is_agreed: values.get("is_agreed"),
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     }
//   ).then((response) => {
//     response.json().then((resData) => {
//       if (response.status == 200) {
//         // 만약 회원가입에 성공한다면
//         setTimeout(() => {
//           document.querySelector("#loading-cover").classList.remove("on"); // 로딩창 끔
//           onSnackbar(resData.message); // 토스트
//         }, 2000);
//       } else {
//         onSnackbar("Error");
//       }
//     });
//   });
// }

// 회원가입 함수
function signUp() {
  document.querySelector("#loading-cover").classList.add("on"); // 로딩창

  console.log("회원가입 함수 동작");
  console.log(
    JSON.stringify({
      email: document.querySelector("#SignUp .form-box input[name=email]")
        .value,
      nickname: document.querySelector("#SignUp .form-box input[name=nickname]")
        .value,
      password: document.querySelector("#SignUp .form-box input[name=password]")
        .value,
      is_agreed: document.querySelector(
        "#SignUp .form-box input[name=is_agreed]"
      ).value,
    })
  );

  alert("멈춰!");
  
  fetch(
    "https://server.mugip.com/auth/signup",
    {
      method: "POST",
      body: JSON.stringify({
        email: document.querySelector("#SignUp .form-box input[name=email]")
          .value,
        nickname: document.querySelector(
          "#SignUp .form-box input[name=nickname]"
        ).value,
        password: document.querySelector(
          "#SignUp .form-box input[name=password]"
        ).value,
        is_agreed: document.querySelector(
          "#SignUp .form-box input[name=is_agreed]"
        ).value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "no-cors",
      },
    }
  ).then((response) => {
    response.json().then((resData) => {
      if (response.status == 200) {
        // 만약 회원가입에 성공한다면
        setTimeout(() => {
          document.querySelector("#loading-cover").classList.remove("on"); // 로딩창 끔
          onSnackbar(resData.message); // 토스트
        }, 2000);
      } else {
        onSnackbar("Error");
      }
    });
  });
}

// 스낵바 함수
function onSnackbar(message) {
  snackbar.innerText = message;
  snackbar.classList.add("show");

  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}
