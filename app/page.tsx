import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Star } from "lucide-react"

export default function RestaurantLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Bella Vista Resturant</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </a>
              <a href="#menu" className="text-gray-700 hover:text-gray-900 font-medium">
                Menu
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Authentic Italian Cuisine in the Heart of the City
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Experience the finest Italian flavors with fresh ingredients, traditional recipes, and warm
                  hospitality that makes every meal memorable.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    View Our Menu
                  </Button>
                  <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                    Make Reservation
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="HERO.JPEG"
                  alt="Delicious Italian pasta dish with fresh herbs and tomatoes"
                  width={600}
                  height={500}
                  loading="eager"
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
   
        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded in 1985, Bella Vista has been serving authentic Italian cuisine for over three decades. Our
                family recipes passed down through generations bring the true taste of Italy to your table.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Only the finest imported ingredients from Italy</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Daily</h3>
                <p className="text-gray-600">All pasta and sauces made fresh every morning</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
                <p className="text-gray-600">Located in the vibrant downtown district</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section id="menu" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Signature Dishes</h2>
              <p className="text-xl text-gray-600">Discover our most beloved Italian specialties</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="PIZZA.JPEG"
                    alt="Classic Margherita Pizza with fresh basil and mozzarella"
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Margherita Pizza</h3>
                  <p className="text-gray-600 mb-4">
                    Fresh mozzarella, San Marzano tomatoes, and basil on our signature wood-fired crust
                  </p>
                  <p className="text-2xl font-bold text-red-600">$18</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="CREAM.JPG"
                    alt="Homemade Fettuccine Alfredo with parmesan cheese"
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fettuccine Alfredo</h3>
                  <p className="text-gray-600 mb-4">
                    House-made fettuccine in our rich, creamy Parmigiano-Reggiano sauce
                  </p>
                  <p className="text-2xl font-bold text-red-600">$22</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="CAKE.JPEG"
                    alt="Traditional Tiramisu dessert with coffee and mascarpone"
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tiramisu</h3>
                  <p className="text-gray-600 mb-4">
                    Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone
                  </p>
                  <p className="text-2xl font-bold text-red-600">$12</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                View Full Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
              <p className="text-xl text-gray-600">
                We're open and ready to serve you the best Italian cuisine in town
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-red-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">123 Main Street, Downtown District, City 12345</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-red-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-red-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Thu: 11am-10pm</p>
                      <p className="text-gray-600">Fri-Sat: 11am-11pm</p>
                      <p className="text-gray-600">Sun: 12pm-9pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 mr-4">
                    Make Reservation
                  </Button>
                  <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                    Order Online
                  </Button>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Find Us</h3>
                <img src="MAP.JPEG" alt="MAP" />
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">


                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bella Vista Resturant</h3>
              <p className="text-gray-300 mb-4">
                Authentic Italian cuisine served with passion and tradition since 1985.
              </p>
              <p className="text-gray-400 text-sm"></p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-gray-300 hover:text-white">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Dveloped by Alamin sanusi. Bella Vista Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
