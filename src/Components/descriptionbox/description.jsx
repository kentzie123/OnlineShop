import review_profile from '../../../public/Assets/reviewProfile.jpg'
import start_icon from '../../../public/Assets/star_icon.png';
const Description = () => {
  return (
    <div className='py-5'>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Reviews (146)</button>
                
            </div>
        </nav>
        <div className="tab-content p-4 border overflow-y-scroll" style={{maxHeight:"250px"}} id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum alias, dolores adipisci et reprehenderit, similique quas ex laborum accusantium architecto iste sapiente quidem omnis, aliquam voluptates distinctio? Voluptate, qui odio?
            Quidem, vero possimus praesentium necessitatibus corporis cum? Nihil illo ipsum, dolor veritatis voluptatibus incidunt, reprehenderit praesentium ex, beatae nesciunt magnam aut voluptates. Soluta quas earum enim laborum voluptatum, dicta nam!
            Beatae perspiciatis quae, ipsam et aut consequuntur necessitatibus eveniet molestias minus sit repellat, distinctio ea deleniti dolore esse, consequatur perferendis incidunt quisquam error dolorum neque itaque alias sed dicta? Distinctio.</div>
            <div className="tab-pane fade d-flex flex-column gap-4"  id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0"> 
                {[...Array(3)].map((_, i) => (
                    <div key={i}>
                        <div className="d-flex gap-3">
                            <div>
                                <img className='rounded-circle' style={{height:"50px",width:"50px"}} src={review_profile} alt="" />
                            </div>
                            <div>
                                <div className='d-flex flex-column gap-1' style={{fontSize:"12px"}}>
                                    <div className='fw-semibold'>alpha322</div>
                                    <div>
                                        {[...Array(5)].map((_,i) => (
                                            <img key={i} src={start_icon} alt="star" />
                                        ))}
                                    </div>
                                    <div className='text-dark-subtle'>2025-01-19 8:37</div>   
                                </div>
                                
                                <div className='mt-2'>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit vel modi, ipsam, saepe necessitatibus ipsa tenetur aperiam ex, repellendus vero velit aliquam explicabo quibusdam? Temporibus, enim dolore. Ab, veniam adipisci.</div>
                                </div>   
                                                
                            </div>
                        </div>
                        <hr className='border border-secondary border-1'/>
                      </div>
                ))}
                <div>
                    <div className="d-flex gap-3">
                        <div>
                            <img className='rounded-circle' style={{height:"50px",width:"50px"}} src={review_profile} alt="" />
                        </div>
                        <div>
                            <div className='d-flex flex-column gap-1' style={{fontSize:"12px"}}>
                                <div className='fw-semibold'>alpha322</div>
                                <div>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <img key={num} src={start_icon} alt="star" />
                                    ))}
                                </div>
                                <div className='text-dark-subtle'>2025-01-19 8:37</div>   
                            </div>
                            
                            <div className='mt-2'>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quia libero at provident error ut illum voluptatum? Necessitatibus minima reprehenderit quibusdam pariatur explicabo! Optio eligendi nemo ut blanditiis accusantium quam!</div>
                            </div>   
                                            
                        </div>
                    </div>
                    <hr className='border border-secondary border-1'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description