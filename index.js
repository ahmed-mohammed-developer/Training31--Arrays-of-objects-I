const tweets = [
  {
    id: 525241545252,
    message: "Hello",
    created_at: "2024-5-5",
    author: {
      id: 7474747474,
      fristname: "Ahmed",
      lastname: "zakan",
      handle: "AhmedZaka",
    }
  },
  {
    id: 9878987898789,
    message: "Yes",
    created_at: "20249-9-4",
    author: {
      id: 32145632,
      fristname: "Mohmed",
      lastname: "Mo",
      handle: "MOhmed",
    }
  },
];
tweets.forEach(tweet => {
  console.log(tweet);
});
console.log(tweets[0].id)
console.log(tweets[1].author.fristname.toUpperCase());

tweets.forEach(tweet => {
  console.log(tweet.author.handle);
});

const messages = tweets.map(tweet => tweet.message);
console.log(messages);

const grades = [
  {
    date: "2024-8-9",
    grade: 15
  },
  {
    date: "2024-7-9",
    grade: 18
  },
];
const number = grades => {
  return grades.length;
}

console.log(number(grades));

const sample = [
  {
    id: 1,
    fristName: "Ahmed",
    lastName: "Mo",
  },
  {
    id: 2,
    fristName: "Ahmed2",
    lastName: "Mo2",
  },
];

const log = sample => {
  sample.forEach(user => {
    console.log(`${user.fristName} ${user.lastName}`);
  });
};

console.log(log(sample));


const results = [
  {
  date: "2025-8-9",
  grade: 15
},
{
  date: "2025-8-15",
  grade: 19
},
];

const sumFor = results => {
  let sum = 0;
  results.forEach(result => {
    console.log(result.grade)
    sum += result.grade
  });
  return sum;
};

console.log(sumFor(results));


const users = [
  {
    joined: "20-8-9",
    age: 14,
  },
  {
    joined: "20-8-8",
    age: 16,
  },
];

const avarge = users => {
  let sum = 0;
  users.forEach(user => {
    sum += user.age;
  });
  return sum / users.length;
};


console.log(avarge(users));


const users2 = [
  {id: 1, name: "Ahmed"},
  {id: 2, name: "Sam", subscription: {
    info: {
      value: 59
    }
  }},
  {id: 3, name: "Jas", subscription: {
    info: {
      value: 31
    }
  }},
];
const totle = users2 => {
  let sum = 0;
  users2.forEach(x => {
    sum += x.subscription?.info?.value ?? 0;
  });
  return sum;
};

console.log(totle(users2));


const names = ["sas", "alex"];
const upeerr = names.map(name => name.toUpperCase());
console.log(upeerr);


const rec = [
  {
    date: 2-8-9,
    tem: 3
  },
  {
    date: 2-8-9,
    tem: 5
  },
];
const tem = rec => {
  return rec.map(re => {
    return re.tem
  });
};

console.log(tem(rec));



const users3 = [
  {
    id: 1,
    fristName: "Ajj",
    lastName: "Greee",
  },
  {
    id: 2,
    fristName: "Qsss",
    lastName: "Wsss",
  },
];

const name = users3 => {
  return users3.map(user => {
    return `${(user.fristName.toUpperCase())} ${(user.lastName.toUpperCase())}`;
  })
};

console.log(name(users3));


function get_duplicate_elements(arr) {
    // write your code here
    return arr.filter(function(x){
      return x === x;
        });
}
console.log(get_duplicate_elements([10,5,9,5]));

function numbers_range(number) {
  // write your code here
    for(let i = 0; i <= number; i++){
      console.log(i);
    }
}
console.log(numbers_range(9));

