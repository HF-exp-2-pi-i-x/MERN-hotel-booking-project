
const MailList = ()=>{
  return (
    <div className="mail mb-5">
      <h1 className="mailTitle text-center text-white fw-bold fst-italic">Save time, save money!</h1>
      <h3 className="mailDesc text-center">Sign up and we'll send the best deals to you</h3>
      <div className="mailInputContainer input-group mt-3">
        <input type="text" placeholder="Your Email" className="form-control fs-5" />
        <button className="btn btn-light input-group-append">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList;