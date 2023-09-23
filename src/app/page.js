import HomePageComponent from "@components/homePage"

export const metadata={
  title:'Home Page',
  description:'This is home page description'
}

export default function Home() {
  return (
    <main>
      <HomePageComponent />
    </main>
  )
}
