let arrFiles = [];

let myDropzone = new Dropzone(".dropzone", {
  url: "/",
  maxFilesize: 2,
  maxFiles: 3,
  acceptedFiles: "image/*,.pdf",
  addRemoveLinks: true,
  dictRemoveFile: "Remove",
});

myDropzone.on("addedfile", (file) => {
  arrFiles.push(file);
});

myDropzone.on("removedfile", (file) => {
  let i = arrFiles.indexOf(file);
  arrFiles.splice(i, 1);
});

document.getElementById("send").addEventListener("click", () => {
  let not = [];
  for (let i = 0; i < arrFiles.length; i++) {
    let imgData = new FormData();
    imgData.append("file", arrFiles[i]);
  }

  if (!not.includes("fail")) {
    alert("Done");
  }
});
