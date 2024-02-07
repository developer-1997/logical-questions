const objectRemove = (value) => {
    Object.keys(value).map((nestKey) => {
      if (!value[nestKey]) {
        delete value[nestKey];
      } else {
        if (typeof value[nestKey] == 'string') {
          if (!value[nestKey]) {
            delete value[nestKey];
          }
        } else if (Array.isArray(value[nestKey])) {
          const newArray = remove(value[nestKey]);
          if (newArray.length) {
            value[nestKey] = newArray;
          } else {
            delete value[nestKey];
          }
        } else {
          objectRemove(value[nestKey]);
          if (!Object.keys(value[nestKey]).length) {
            delete value[nestKey];
          }
        }
      }
    });
    return value;
  };
  
  const remove = (arr) => {
    let newArray = [];
    arr.map((value) => {
      if (typeof value == 'string') {
        if (value) {
          newArray.push(value);
        }
      } else {
        const objResult = objectRemove(value);
        newArray.push(objResult);
      }
    });
    return newArray;
  };
  
  const data = [
    {
      name: 'John',
      age: '',
      city: null,
      country: 'USA',
      Hobbies: ['reading', 'swimming', 'hiking', 'swimming'],
      occupation: 'programmer',
      favorite_foods: {
        Breakfast: 'pancakes',
        Lunch: '',
        dinner: 'pasta',
        Snack: '',
      },
      gear: {
        type: '',
        material: '',
        color: null,
      },
      affiliations: ['', '', ''],
      friends: [
        {
          name: 'Jane',
          age: 28,
          city: 'New York',
          country: 'USA',
          occupation: null,
        },
        {
          name: 'Tom',
          age: 32,
          city: 'London',
          country: 'UK',
          occupation: 'teacher',
        },
        {
          name: 'Jane',
          age: 28,
          city: 'New York',
          country: 'USA',
          occupation: null,
        },
      ],
    },
  ];
  
  const result = remove(data);
  console.log(result);
  