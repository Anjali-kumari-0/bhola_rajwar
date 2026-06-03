import React from 'react'
import { allReviews } from '../../constants/review'

const Review = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">
                    <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                        Client Testimonials
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        What Our Clients Say
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Trusted legal representation with proven results.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {allReviews.map((review) => (
                        <div
                            key={review.id}
                            className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2
            ${review.featured
                                    ? "bg-slate-900 text-white shadow-2xl"
                                    : "bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl"
                                }
          `}
                        >
                            <div className="mb-4 text-amber-400">
                                {"★".repeat(review.rating)}
                            </div>

                            <p
                                className={`leading-relaxed ${review.featured ? "text-slate-300" : "text-slate-600"
                                    }`}
                            >
                                {review.review}
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="h-14 w-14 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold">
                                        {review.name}
                                    </h4>

                                    <p
                                        className={`text-sm ${review.featured ? "text-slate-400" : "text-slate-500"
                                            }`}
                                    >
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Review