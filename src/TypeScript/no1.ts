const ts = require("typescript");

const scanner = ts.createScanner(ts.ScriptTarget.ESNext, true);
scanner.setText(`var x = String.fromCharCode(100);`);
while (scanner.scan() !== ts.SyntaxKind.EndOfFileToken) {
  // EndOfFileToken 表示结束
  const tokenType = scanner.getToken(); // 标记类型编码
  const start = scanner.getTokenPos(); // 开始位置
  const end = scanner.getTextPos(); // 结束位置

  const tokenName = ts.tokenToString(tokenType); // 转为可读的标记名

  console.log(`在 ${start}-${end} 发现了标记：${tokenName}`);
}
