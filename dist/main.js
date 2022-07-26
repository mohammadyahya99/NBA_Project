const render = (teamInf) => {
  let source = $("#playerContainer").html();
  let template = Handlebars.compile(source);
  $("#mainContainer").empty();
  for (let player of teamInf) {
    let newHTML = template(player);
    $("#mainContainer").append(newHTML);
  }
};
function playerImg(img) {
  img.src = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
}

const Data = () => {
  fetch();
};

const fetch = () => {
  let teamName = $("#nameInput").val();
  $.get(`/teams/${teamName}`, (teamInf) => {
    render(teamInf);
    getPlayerData();
  });
  $("#teamNameInput").val("");
};
