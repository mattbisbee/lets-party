function Contact(){
    return(
        <>
        <br></br>
        <div className="mb-3 mx-5 fw-bolder" >
          <label for="exampleFormControlInput1" className="form-label mt-5">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3 mx-5 fw-bolder">
          <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary d-grid mx-auto mb-5">Sumbit</button>
      </>
    )
}

export default Contact