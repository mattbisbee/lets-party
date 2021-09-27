import Nav from "../components/Nav";
import Header from "../components/Header";
 
import Footer from "../components/Footer";
 
function Contact(){
    return(
        <>
        
        <Nav />
       
        <div class="mb-3 mx-5 fw-bolder" >
        
  <label for="exampleFormControlInput1" class="form-label mt-5">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3 mx-5 fw-bolder">
  <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-outline-warning d-grid mx-auto mb-5">Sumbit</button>
        <Footer />
      </>
    )
}

export default Contact