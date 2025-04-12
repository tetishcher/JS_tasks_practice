let getLanguages = (students, condition) => {
    if (condition) {
      students = students.filter(condition);
    }
    return students.reduce((newArr, obj) => {
      return [...newArr, ...obj.languages];
    }, []);
  };
  export default getLanguages;