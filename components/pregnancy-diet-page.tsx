'use client'

import { Apple, Milk, Wheat, Leaf, Heart, Baby, Shield, Zap } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

const foodGroups = [
  {
    id: 1,
    name: "VEGETABLES",
    subtitle: "Eat more dark-green veggies like broccoli, spinach, and other dark leafy greens",
    calories: "47 Kcal",
    proteins: "3.3g",
    benefits: "Vegetables are packed with powerful nutrients that support you and your baby.",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    examples: ["Spinach", "Broccoli", "Kale", "Fenugreek leaves", "Mustard greens", "Cabbage"]
  },
  {
    id: 2,
    name: "MILK",
    subtitle: "Go low-fat or fat-free when you choose milk yogurt and other milk products",
    calories: "8.20 Kcal",
    proteins: "3.5g",
    benefits: "To get adequate amounts of calcium during pregnancy, drink three 8-ounce glasses (24 ounces) of nonfat milk each day.",
    icon: Milk,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    examples: ["Low-fat milk", "Greek yogurt", "Paneer", "Buttermilk", "Cheese", "Lassi"]
  },
  {
    id: 3,
    name: "FRUITS",
    subtitle: "Eat a variety of fruit. Choose fresh, frozen, canned, or dried fruit. Go easy on fruit juices",
    calories: "184 Kcal",
    proteins: "22g",
    benefits: "Fruits are important sources of many nutrients, including potassium, fiber, vitamin C and folate (folic acid).",
    icon: Apple,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    examples: ["Oranges", "Bananas", "Apples", "Pomegranate", "Papaya", "Guava"]
  },
  {
    id: 4,
    name: "GRAINS",
    subtitle: "Eat at least 3 oz. of whole-grain cereals, breads, crackers, rice, or pasta every day",
    calories: "605 Kcal",
    proteins: "170g",
    benefits: "Grains are important sources of many nutrients, including fiber, B vitamins (thiamin, riboflavin, niacin and folate) and minerals (iron, magnesium and selenium).",
    icon: Wheat,
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    examples: ["Brown rice", "Whole wheat roti", "Quinoa", "Oats", "Barley", "Millet"]
  }
]

const nutritionTips = [
  {
    icon: Heart,
    title: "Folic Acid",
    description: "Essential for preventing birth defects. Found in leafy greens and fortified grains."
  },
  {
    icon: Shield,
    title: "Iron",
    description: "Prevents anemia and supports baby's growth. Include iron-rich foods daily."
  },
  {
    icon: Zap,
    title: "Calcium",
    description: "Builds strong bones and teeth for your baby. Dairy products are excellent sources."
  },
  {
    icon: Baby,
    title: "Protein",
    description: "Essential for baby's growth and development. Include variety of protein sources."
  }
]

export default function PregnancyDietPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23292c61' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3Ccircle cx='30' cy='30' r='25'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-6">
              <Baby className="w-4 h-4" />
              Pregnancy Nutrition Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              What You Should <span className="text-primary">Eat During</span> Pregnancy
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover the 4 essential food groups in your pregnancy diet chart. Each contains Indian foods that will meet your nutritional needs as well as your baby's development requirements.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-gray-600">Food Groups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-600">Nutrients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-sm text-gray-600">Indian Foods</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">9</div>
                <div className="text-sm text-gray-600">Months Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Groups Table Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Essential <span className="text-primary">Food Groups</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each food group provides specific nutrients crucial for your baby's healthy development and your well-being during pregnancy.
            </p>
          </div>

          {/* Food Groups Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 to-purple-600">
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Food</th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Calorie (kcal)</th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Proteins (gms)</th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Benefits</th>
                  </tr>
                </thead>
                
                {/* Table Body */}
                <tbody>
                  {/* Vegetables Row */}
                  <tr className="border-b border-gray-200 hover:bg-green-50 transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                          <Leaf className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">VEGETABLES</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            (Eat more dark-green veggies like broccoli, spinach, and other dark leafy greens)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">47Kcal</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">3.3g</div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-gray-700 leading-relaxed">
                        Vegetables are packed with powerful nutrients that support you and your baby.
                      </p>
                    </td>
                  </tr>

                  {/* Milk Row */}
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
                          <Milk className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">MILK</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            (Go low-fat or fat-free when you choose milk yogurt and other milk products)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">8.20Kcal</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">3.5g</div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-gray-700 leading-relaxed">
                        To get adequate amounts of calcium during pregnancy, drink three 8-ounce glasses (24 ounces) of nonfat milk each day.
                      </p>
                    </td>
                  </tr>

                  {/* Fruits Row */}
                  <tr className="border-b border-gray-200 hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                          <Apple className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">FRUITS</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            (Eat a variety of fruit Choose fresh, frozen, canned, or dried fruit Go easy on fruit juices)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">184Kcal</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">22g</div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-gray-700 leading-relaxed">
                        Fruit are important sources of many nutrients, including potassium, fiber, vitamin C and folate (folic acid).
                      </p>
                    </td>
                  </tr>

                  {/* Grains Row */}
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 shadow-lg">
                          <Wheat className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">GRAINS</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            (Eat at least 3 oz. of whole-grain cereals, breads, crackers, rice, or pasta every day)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">605kcal</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-xl font-bold text-gray-900">170g</div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-gray-700 leading-relaxed">
                        Grains are important sources of many nutrients, including fiber, B vitamins (thiamin, riboflavin, niacin and folate) and minerals (iron, magnesium and selenium).
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Indian Food Examples Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Indian Food Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {foodGroups.map((group, index) => (
                <div key={group.id} className={`${group.bgColor} ${group.borderColor} border-2 rounded-2xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${group.color} shadow-lg`}>
                      <group.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">{group.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.examples.map((food, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/80 text-gray-700 text-xs rounded-full border">
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Tips Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-[#4845a9] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Key <span className="text-cyan-400">Nutrients</span> to Focus On
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              These essential nutrients play crucial roles in your baby's development and your health during pregnancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nutritionTips.map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{tip.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Ready to Start Your <span className="text-primary">Healthy Pregnancy</span> Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get personalized nutrition guidance and expert support throughout your pregnancy. Our specialists are here to help you make the best choices for you and your baby.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/appointment">
              Book Nutrition Consultation
            </CTAButton>
            <CTAButton href="/information-kit" variant="secondary">
              Download Diet Guide
            </CTAButton>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Pro Tip</h3>
            <p className="text-gray-700">
              Consult with your healthcare provider before making significant dietary changes during pregnancy. Every pregnancy is unique, and personalized advice is always best.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}