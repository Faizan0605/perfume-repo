import React from 'react'

const Sec1 = () => {
    return (
        <section className='hidden lg:flex justify-center '>
            <div className='w-3/4 flex justify-around ' >
                <div className='w-1/2 flex  items-center'>
                    <div>
                        <img src="/images/2.webp" alt="My Image" className=" h-auto" />
                    </div>

                </div>
                <div className='w-1/2 flex justify-end items-center'>
                    <div className='w-8/9'>
                        <h1 className='text-4xl mb-5 text-zinc-700'>Velour in a Bottle</h1>
                        <p className='text-zinc-500 mb-5'>Immerse yourself in a world where fragrance becomes an art of elegance. Each perfume in our collection is crafted with rare, handpicked ingredients sourced from the finest origins across the globe. From the first delicate note to the lingering trail, every blend whispers of sophistication, charm, and timeless allure.</p>
                        <p className='text-zinc-500'>Perfume is not just a scent — it is an identity, a memory, a presence that lingers even after you've gone. With every drop, you carry the aura of luxury and refinement, leaving behind a signature that is uniquely yours. Indulge in the beauty of a fragrance that doesn't just adorn you, but defines you.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec1