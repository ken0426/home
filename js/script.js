window.addEventListener('load',()=>{
  const service = document.getElementById('service');
  const sub_item = document.getElementById('sub-item');

  service.addEventListener("click", ()=>{
    sub_item.style.display = "block";
  })
})