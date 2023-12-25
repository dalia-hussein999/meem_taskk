const steps = document.querySelectorAll(".step");
const overlays = document.querySelectorAll(".services-item .overlay");
const serviceItems = document.querySelectorAll(".services-item");

const stepsContent = [
  {
    id: 1,
    title: "التسجيل",
    content:
      " في هذه المرحلة نسعي لاستقطاب الأسر المنتجة ذو الكفاءة والرغبة للانتقال الي مشاريع صغيرة مستدامة",
  },
  {
    id: 2,
    title: "القبول",
    content:
      " في هذه المرحلة يتم قبول المشتركين بناء علي الضوابط والشروط المذكورة",
  },
  {
    id: 3,
    title: "التدريب",
    content:
      " في هذه المرحلة يتم تقديم برامج تدريبية وتأهيلية للمشتركين بموجز 7 حقائب تطويرية لتنمية المهارات المعرفية لدي المشتركين",
  },
  {
    id: 4,
    title: "دراسة الجدوي",
    content:
      "في هذه المرحلة يتم تقدم محتوي تدريبي لكيفية اعداد دراسة الجدوي للمشاركين",
  },
  {
    id: 5,
    title: "جلسات الأستشارية",
    content:
      "في هذه المرحلة يتم استقطاب متخصصين لمساندة المشاريع وتمكينها من تحقيق النمو والتوسع وزيادة مبيعات المشاركين السوية ومتابعتها",
  },
  {
    id: 6,
    title: "تمويل",
    content:
      "في هذه المرحلة يتم تقديم منتج تمويلي بالاضافة إلي متابعة كافة الأعمال بحيث توجيههم لكيفية التصرف",
  },
  {
    id: 7,
    title: "تطوير الأعمال",
    content:
      "في هذه المرحلة يتم تمكين وتطوير مشاريع المشاركين من خلال متخصصين في تطوير الاعمال وتنمية المبيعات لدي المشاركين",
  },
  {
    id: 8,
    title: "تصدير",
    content:
      "في هذه المرحلة يتم دعم مشاريع المشاركين من خلال ربطهم بجهات تصدير وربطهم بمنافذ بيع دولية وتصدير مشاريعهم كققص نجاح لبرنامج تجسير",
  },
];
const services = [
  {
    title: "التدريب",
    content:
      "برامج تدريبية وتأهيلية لتنمية المهارات التعريفية لأصحاب المشاريع المتناهية الصغر.",
  },
  {
    title: "تطوير الأعمال",
    content:
      ".تمكين وتطوير الأسر المنتجة من مهارات وتنمية مبيعات المشاريع المشاركة ودعم انتشارها للتحول الي مشارع ناشئة صغيرة",
  },
  {
    title: "دراسة الجدوي",
    content: ".محتوي تدريبي الكتروني تفاعلي لكيفية إعداد دراسة الجدوي للمشاريع",
  },
  {
    title: "الجلسات الأستشارية",
    content:
      ".متخصصين لمساندة المشاريع وتمكينها من تحقيق النمو والتوسع وزيادة الإيرادات السنوية ومتابعتها",
  },
  {
    title: "التمويل",
    content:
      ".منتج تمويلي بالأضافة إلي خدمة متابعة كافة الأعمال بحيث توجيههم بكيفة التصرف ",
  },
];

function handleItemClick(item) {
  const stepId = item.id;
  const index = parseInt(stepId.replace("step", ""));
  steps.forEach((step) => {
    step.classList.remove("active");
  });
  item.classList.add("active");

  let counter = document.getElementById("counter");
  let desc = document.querySelector(".desc");
  counter.textContent = index + 1;
  desc.textContent = stepsContent[index].content;
}
const addServiceTitle = (item, service) => {
  const overlay = item.querySelector(".overlay");
  overlay.innerHTML = "";
  let title = document.createElement("h4");
  title.textContent = service.title;
  overlay.appendChild(title);
};

serviceItems.forEach((item, index) => {
  if (index !== 0) {
    addServiceTitle(item, services[index]);
  }
  item.addEventListener("click", (event) => {
    serviceItems.forEach((item, index) => {
      item.classList.remove("active-item");
      //overlays.forEach((overlay, index) => {
        //overlay.addEventListener("click", (event) => {
          //let clickedOverlay = event.currentTarget;
          //let isGreenOverlay = clickedOverlay.classList.contains("green-overlay");
          //let isBlueOverlay = clickedOverlay.classList.contains("blue-overlay");
  
          //overlays.forEach((otherOverlay) => {
           // if (otherOverlay !== clickedOverlay) {
            //  otherOverlay.classList.remove("overlay-active");
           // }
         // });
  
          //clickedOverlay.classList.add("overlay-active");
        //});
      //});
  
      addServiceTitle(item, services[index]);
    });
	let clickedOverlay = event.currentTarget.querySelector("div");
	overlays.forEach((overlay, index) => {
        
        overlays.forEach((otherOverlay) => {
			if (otherOverlay !== clickedOverlay) {
               otherOverlay.classList.remove("overlay-active");
            }
        });
        clickedOverlay.classList.add("overlay-active");
      });
	//clickedOverlay.classList.add("overlay-active");
    event.currentTarget.classList.add("active-item");

    
    let paragraph = document.createElement("p");
    paragraph.textContent = services[index].content;
    item.querySelector(".overlay").appendChild(paragraph);

    const button = document.createElement("button");

    button.textContent = "عرض المزيد";

    const span = document.createElement("span");
    span.classList.add("btn-icon");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-arrow-left-long");

    span.appendChild(icon);

    button.appendChild(span);

    item.querySelector(".overlay").appendChild(button);
  });
});
