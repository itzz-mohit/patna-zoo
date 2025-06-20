import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zoo-teal-700 py-8">
      <div className="zoo-container">
        <div className="bg-zoo-beige-light text-zoo-teal-700 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 justify-between mb-8">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zoo-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <div className="font-heading text-2xl leading-none">Patna</div>
                  <div className="font-heading text-2xl leading-none">Zoo</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:ml-0 lg:ml-0">
                <div className="w-8 h-8 bg-zoo-teal-700 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">BS</span>
                </div>
                <div className="text-sm text-zoo-teal-600">Bihar Sarkar</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about/history" className="hover:underline">
                      History & Legacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/tickets" className="hover:underline">
                      Tickets & Timings
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/location" className="hover:underline">
                      Location & How to Reach
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/rules" className="hover:underline">
                      Rules & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/accessibility" className="hover:underline">
                      Accessibility
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/faqs" className="hover:underline">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">What's Here</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/animals" className="hover:underline">
                      Animals
                    </Link>
                  </li>
                  <li>
                    <Link href="/animals/birds" className="hover:underline">
                      Birds
                    </Link>
                  </li>
                  <li>
                    <Link href="/animals/reptiles" className="hover:underline">
                      Reptiles
                    </Link>
                  </li>
                  <li>
                    <Link href="/animals/plants" className="hover:underline">
                      Plants
                    </Link>
                  </li>
                  <li>
                    <Link href="/experience/mayur-canteen" className="hover:underline">
                      Mayur Canteen
                    </Link>
                  </li>
                  <li>
                    <Link href="/experience/souvenir-shop" className="hover:underline">
                      Souvenir Shop
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Programs & Updates</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/programs/adopt" className="hover:underline">
                      Adopt an Animal
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/breeding" className="hover:underline">
                      Breeding Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/tenders" className="hover:underline">
                      Live Tenders
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/news" className="hover:underline">
                      News Update
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Conservation</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about/directors-message" className="hover:underline">
                      Director's Message
                    </Link>
                  </li>
                  <li>
                    <Link href="/conservation/our-work" className="hover:underline">
                      Our Work
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zoo-teal-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/PatnaZooOfficial/"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/patnazooofficial/"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com/PatnaZoo"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.youtube.com/@PatnaZooOfficial"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>

            <div className="text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Patna Zoo, Government of Bihar. All rights reserved.</p>
              <div className="flex gap-2 justify-center md:justify-end mt-2 text-xs">
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
                <Link href="/cookies" className="hover:underline">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
