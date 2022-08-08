const formatDate = (date) => {
  var result = new Date(date);
  var dd = String(result.getDate()).padStart(2, "0");
  var mm = String(result.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = result.getFullYear();

  result = mm + "/" + dd + "/" + yyyy;

  return result;
};

export default formatDate;
