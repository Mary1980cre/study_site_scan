import React from "react";


function Search() {
  return (
   
      
    <div class="container">

        <div class="row flex-lg-row align-items-top g-5 py-5">

            <div class="col-lg-8">
                <h2 class="display-3 fw-bold text-body-emphasis lh-1 mb-3">
                    Найдите необходимые данные в пару кликов.</h2>
                    <p class="search-descr">
                        Задайте параметры поиска. 
Чем больше заполните, тем точнее поиск
                    </p>

                    <div class="row row-custom-form">
                      <div class="col-lg-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">ИНН компании*</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="10 цифр" />
                          </div>

                          <div class="form-group">
                            <label for="exampleFormControlSelect1">Тональность</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                              <option>Любая</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Количество документов в выдаче
                              *</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="От 1 до 1000" />
                          </div>

                    
                          <div class = "row">  
                            <label for="exampleFormControlInput1">Диапазон поиска*</label> 
                            <div class = "flex-custom"> 
                             <input type = "date" name = "date"  data-placeholder="Дата начала" required aria-required="true" />  
                             <input type = "date" name = "date" data-placeholder="Дата окончания" required aria-required="true" />  
                            </div>  
                            </div>
</div>
<div class="col-lg-6">
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
    <label class="form-check-label" for="defaultCheck1">
      Признак максимальной полноты
    </label>
  </div><div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
    <label class="form-check-label" for="defaultCheck1">
      Упоминания в бизнес-контексте
    </label>
  </div><div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
    <label class="form-check-label" for="defaultCheck1">
      Главная роль в публикации
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
    <label class="form-check-label" for="defaultCheck1">
      Публикации только с риск-факторами
    </label>
  </div>

<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
<label class="form-check-label" for="defaultCheck1">
Включать технические новости рынков
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
<label class="form-check-label" for="defaultCheck1">
  Включать анонсы и календари
</label>
</div>


<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
<label class="form-check-label" for="defaultCheck1">
  Включать сводки новостей
</label>
</div>
<button type="button" class="btn btn-primary form-check-custom">
  <a href="/result" class="search-link">Поиск</a></button>
<p class="search-button-descr">
* Обязательные к заполнению поля
</p>
</div>
</div> 
</div>






          <div class="col-4 col-sm-2 col-lg-4">
            <img src="./img/Group 1171274277.png" alt="pic"/>
            </div>
            </div>
            </div>



  );
}

export default Search;
