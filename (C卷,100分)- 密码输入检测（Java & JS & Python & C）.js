/*
密码长度 ≥ 8；
密码至少需要包含 1 个大写字母；
密码至少需要包含 1 个小写字母；
密码至少需要包含 1 个数字；
密码至少需要包含 1 个字母和数字以外的非空白特殊字符；*/

const main = (s) => {
  const inp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "<") {
      inp.pop();
    } else {
      inp.push(s[i]);
    }
  }
  const inpStr = inp.join("");
  let ans = true;
  if (inpStr.length < 8) ans = false;
  const upper = /[A-Z]/.test(inpStr);
  const lower = /[a-z]/.test(inpStr);
  const num = /[0-9]/.test(inpStr);
  const special = /[^A-Za-z0-9\s]/.test(inpStr);
  ans = ans && upper && lower && num && special;
  return `${inpStr},${ans}`;
};
