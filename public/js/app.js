// global variables
const logo = document.getElementById("headerLogo");
const logoText = document.getElementById("logoText")
const webDev = "Cheney Enterprises | Web Development";
const chenEnt = "Cheney Enterprises";

// logo animation script & timing
let logoTimer = false;
let logoDir = 'forward';
$('#headerLogo').on('mouseenter', (e) => {
    if (logoTimer === false && logoDir === "forward") {
      logoTimer = true;
      updatedLogoState = "/img/completeAnimation-2-5sec-1rot.png"
      $("#headerLogo").attr(
        "src",
        updatedLogoState
      );
      setTimeout(() => {
        logoTimer = false;
        logoDir = "reverse";
      }, 1375);
    }
    else if (logoTimer === false && logoDir === 'reverse') {
      logoTimer = true;
      updatedLogoState = "/img/completeAnimation-2-5sec-1rot-rev.png";
      $("#headerLogo").attr(
        "src",
        updatedLogoState
      );
      setTimeout(() => {
        logoTimer = false;
        logoDir = "forward";
      }, 1375);
    }
})

const style = (element, prop = "height") => {
  return parseInt(getComputedStyle(element)[prop]);
};

const scrollContResize = () => {
  var cardBodyArr = Object.entries(
    document.getElementsByClassName("card-body")
  );
  cardBodyArr.forEach(el => {
    var elt = el[1];
    elt.style.height = style(elt.parentElement) - style(elt.parentElement.children[0]);
    return (elt.lastChild.style.height =
      style(elt) -
      style(elt, "padding-top") * 2 -
      style(elt.children[0]) -
      style(elt.children[1], "margin-top") * 2 -
      (style(elt.children[2]) + style(elt.children[2], "margin-bottom")));
  });
};

const canvDimensions = () => {
  const iconContHeight = style(document.getElementsByClassName("icons")[0]);
  const icons = document.getElementsByClassName('icon');
  for (let i = 0; i < icons.length; i++){
    icons[i].setAttribute('height',iconContHeight);
    icons[i].setAttribute('width',iconContHeight);
    continue;
  }
}

// logo text for Load & Resize Events
$(window).on("load resize", () => {
  scrollContResize();
  canvDimensions();
  if (window.outerWidth <= 375) {
    logoText.innerText = "Cheney ...";
  } else if (window.outerWidth <= 535) {
    logoText.innerText = "Cheney Ent.";
  } else if (window.outerWidth <= 784) {
    logoText.innerText = chenEnt;
  } else if (window.outerWidth > 784) {
    logoText.innerText = webDev;
  }
  }
)

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// $(function () {
//   on()
// })
