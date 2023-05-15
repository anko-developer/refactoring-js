import fs from 'fs';

// [스크립팅 단계 설명]
// 1. run 함수를 만들어서 노드의 process 디펜던시를 제거하였음
run(process.argv);

// 2. 사용자에게 입력을 받아옴 -> 유효성 검사
// 3. 필요한 로직을 처리
function run(args) {
  // const command = parseCommand(args);
  countOrders(parseCommand(args));
}

// 유효성 검사
function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  
  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  // const countReadyOnly = args.includes('-r');

  return {
    fileName,
    countReadyOnly: args.includes('-r'),
  }
}

function countOrders({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadyOnly ? orders.filter((order) => order.status === 'ready') : orders; 
  console.log(filtered.length);
}