import Navbar from '../components/navbar'
import Post from '../components/post'
import Stories from '../components/stories'
import Suggestions from '../components/suggestions'

export default function Home() {
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
  ]


  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />

      <main className="bg-gray-50 min-h-screen min-w-screen mt-14">
        <div className="mx-auto sm:max-w-[600px] lg:max-w-[930px] flex flex-row space-x-5 mt-7">
          <div className="sm:max-w-[600px] w-full min-h-full flex-shrink-0 mr-4 overflow-hidden">
            <Stories />
            {
              images.map((a, index) => (
                <Post key={index} image={a} />
              ))
            }
          </div>
          <div className="lg:visible invisible max-w-[320px] h-96 flex-shrink-0 relative">
            <Suggestions />
          </div>
        </div>
      </main>
    </div>
  )
}
