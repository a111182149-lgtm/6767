/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Globe, Facebook, Linkedin, Instagram, Ship, MapPin, Calendar, ExternalLink, ChevronRight, Film, GraduationCap, Award } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <motion.div variants={fadeInUp} className="mb-12">
    <div className="flex items-baseline gap-4 mb-2">
      <h2 className="text-2xl font-display font-medium tracking-tight text-neutral-900">
        {children}
      </h2>
      {subtitle && <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{subtitle}</span>}
    </div>
    <div className="h-px w-full bg-neutral-200" />
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-neutral-900 selection:text-white">
      {/* Structural Grid Background - Subtle Maritime Technical Feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-12 py-16 md:py-24">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-start gap-12 mb-32">
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-56 h-72 md:w-64 md:h-80 bg-white border border-neutral-200 p-2 shadow-sm relative group"
          >
            <div className="w-full h-full overflow-hidden border border-neutral-100 relative">
              <img
                src="https://lh3.googleusercontent.com/d/1cgR1lQ_6QNqGyizE94uhWYifg97WyMyr"
                alt="Lin Yu Cheng"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-neutral-300 pointer-events-none" />
          </motion.div>

          {/* Profile Info */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex-1 space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-neutral-300" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Maritime Professional</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter text-neutral-900">
                林育正 <br />
                <span className="text-3xl md:text-5xl text-neutral-400 font-light tracking-tight">Lin Yu Cheng.</span>
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Expertise / Tags</p>
                <div className="flex flex-wrap gap-2 text-sm text-neutral-600">
                  {["南部特快車", "靜城專案", "通桃", "觀音山地主隊"].map(tag => (
                    <span key={tag} className="border border-neutral-200 px-2 py-0.5 rounded-sm hover:border-neutral-900 transition-colors cursor-default">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Vital / Details</p>
                <p className="text-sm text-neutral-600 font-light flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" /> 2007.02.16 / 水瓶座 / 台製
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4 flex flex-wrap items-center gap-8 border-t border-neutral-100">
              <div className="space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Inquiries</p>
                <a href="mailto:a111182149@nkust.edu.tw" className="text-lg font-medium hover:text-neutral-500 transition-colors border-b border-neutral-300 hover:border-neutral-900">
                  a111182149@nkust.edu.tw
                </a>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: Globe, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 border border-neutral-200 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* Greeting Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 border-l-2 border-neutral-900 pl-12 py-4"
        >
          <p className="text-2xl md:text-3xl text-neutral-600 leading-tight font-light max-w-3xl">
            來自高雄，目前就讀 <span className="text-neutral-900 font-medium">國立高雄科技大學 航海科</span>。
            追求卓越的航行技術與專業管理，致力於在未來的海運產業中，引航前行。
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-40">
          
          {/* Education Section */}
          <section id="education">
            <SectionTitle subtitle="Academic">學校經歷 / Education</SectionTitle>
            <motion.a 
              href="https://st.nkust.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="block bg-white border border-neutral-200 p-8 md:p-12 shadow-sm hover:border-neutral-900 transition-all duration-500 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-neutral-50 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">2022-09 / 2027-06</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-neutral-900">國立高雄科技大學</h3>
                    <p className="text-xl text-neutral-500 font-light">航海技術系 <span className="text-sm font-mono text-neutral-400">/ Department of Marine Engineering</span></p>
                  </div>
                </div>
                <div className="hidden md:block h-20 w-px bg-neutral-100 group-hover:bg-neutral-900/10 transition-colors" />
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3 border-b border-neutral-100 pb-1">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {["Navigation", "Marine Safety", "Ship Management"].map(skill => (
                      <span key={skill} className="text-xs border border-neutral-100 px-3 py-1 text-neutral-500 group-hover:border-neutral-200 transition-colors lowercase font-mono">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          </section>

          {/* Languages Section */}
          <section id="languages">
            <SectionTitle subtitle="Linguistic">語言能力 / Language Proficiency</SectionTitle>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-neutral-200 p-8 md:p-12 shadow-sm hover:border-neutral-900 transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {[
                  { lang: "中文 / Mandarin", level: "精通 Fluent", desc: "母語程度，具備流利的聽說讀寫能力。" },
                  { lang: "台語 / Taiwanese", level: "精通 Fluent", desc: "母語程度，日常生活溝通無礙。" },
                  { lang: "英文 / English", level: "略懂 Basic", desc: "具備基本溝通能力與航海專業術語理解。" }
                ].map((item, i) => (
                  <div key={i} className="space-y-4 relative">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neutral-900" />
                        <h3 className="text-lg font-medium text-neutral-900">{item.lang}</h3>
                      </div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest px-4">{item.level}</p>
                    </div>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed px-4 border-l border-neutral-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* IT Skills Section */}
          <section id="it-skills">
            <SectionTitle subtitle="Technical">電腦技能 / IT Skills</SectionTitle>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-neutral-200 p-8 md:p-12 shadow-sm hover:border-neutral-900 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-neutral-50 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <Globe className="w-5 h-5 text-current" />
                    </div>
                    <h3 className="text-xl font-medium text-neutral-900">辦公應用軟體 / Office Software</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { name: "Word", desc: "Document processing" },
                      { name: "Excel", desc: "Data analysis & charts" },
                      { name: "Powerpoint", desc: "Digital presentations" }
                    ].map((item, i) => (
                      <div key={i} className="border border-neutral-100 p-4 hover:border-neutral-900 transition-colors">
                        <p className="text-sm font-bold text-neutral-900 mb-1">{item.name}</p>
                        <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-px md:h-32 bg-neutral-100" />
                <div className="md:w-1/3 flex flex-col justify-center">
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-2">Verified Suite</p>
                  <p className="text-lg font-light text-neutral-600 italic">"Microsoft Office Specialist Proficiency"</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Professional Certifications Section */}
          <section id="certifications">
            <SectionTitle subtitle="Professional">專業證照 / Certifications</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "基本安全訓練",
                "保全職責",
                "保全意識",
                "進階滅火",
                "熟練救生艇筏及救難艇操縱",
                "油輪與化學液體船貨物操作基本訓練",
                "醫療急救",
                "客船安全訓練"
              ].map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 bg-white border border-neutral-100 p-6 shadow-sm hover:border-neutral-900 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-neutral-900">{cert}</h4>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                       STCW Certified <span className="w-1 h-px bg-neutral-200" /> Professional
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Travel Section */}
          <section id="travel">
            <SectionTitle subtitle="Voyages">旅遊 / 學習經歷</SectionTitle>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "MSC 地中海郵輪 - 日本",
                  location: "佐世保 / Sasebo",
                  date: "2024.06",
                  image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=800&q=80",
                  details: ["體驗海上輔助療法", "參觀當地酒廠", "參觀當地神社", "貓島"]
                },
                {
                  title: "御風輪 - 日本",
                  location: "東京 / Tokyo",
                  date: "2025.05",
                  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
                  details: ["體驗海上生 - 法式糕點", "淺草寺", "阿美橫町", "東京鐵塔", "台場DiverCity"]
                },
                {
                  title: "台中 南投三日遊",
                  location: "台中 南投 / Taichung & Nantou",
                  date: "2026.02",
                  image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=80",
                  details: ["體驗人生第一次自己去玩", "武嶺", "忘憂森林", "一中街", "日月潭"]
                }
              ].map((item: any, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-neutral-200 mb-6 overflow-hidden relative shadow-sm border border-neutral-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-400">{item.location}</h3>
                      <span className="text-[10px] font-mono text-neutral-400">{item.date}</span>
                    </div>
                    <h4 className="text-lg font-medium group-hover:underline underline-offset-4 decoration-neutral-300">{item.title}</h4>
                    {item.details && (
                      <ul className="pt-3 space-y-1 border-t border-neutral-100 mt-2">
                        {item.details.map((detail: string, di: number) => (
                          <li key={di} className="text-[10px] text-neutral-400 font-light flex items-center gap-2">
                            <span className="w-1 h-px bg-neutral-300" /> {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Itinerary & Budget Section */}
          <section id="itinerary">
            <SectionTitle subtitle="Route & Budget">行程規劃 / Itinerary & Budget</SectionTitle>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="overflow-x-auto border-t border-neutral-200"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-100/50">
                    <th className="py-4 px-4 text-[10px] font-mono uppercase tracking-widest text-neutral-400 w-24">Day / Topic</th>
                    <th className="py-4 px-4 text-[10px] font-mono uppercase tracking-widest text-neutral-400 w-24">Time</th>
                    <th className="py-4 px-4 text-[10px] font-mono uppercase tracking-widest text-neutral-400">Content / 行程內容</th>
                    <th className="py-4 px-4 text-[10px] font-mono uppercase tracking-widest text-neutral-400">Highlights / 亮點備註</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {/* Day 1 */}
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-6 px-4 font-bold text-neutral-900 align-top" rowSpan={5}>Day 1<br/><span className="text-[10px] font-mono text-neutral-400 font-normal">高山星空</span></td>
                    <td className="py-6 px-4 font-mono text-neutral-500 align-top">09:00</td>
                    <td className="py-6 px-4 text-neutral-900 group">出發直衝南投</td>
                    <td className="py-6 px-4 text-neutral-500 font-light text-xs italic">建議由國道六號前往埔里</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">11:30</td>
                    <td className="py-4 px-4 text-neutral-900 font-medium">武嶺 (3275m)</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">全台公路最高點，必拍團體大合照</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">13:30</td>
                    <td className="py-4 px-4 text-neutral-900">清境農場</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">青青草原餵羊、觀賞綿羊秀，呼吸高山空氣</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">16:00</td>
                    <td className="py-4 px-4 text-neutral-900">露營區 Check-in</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">推薦：山適雲想 或 朵娜朵露營 (空手入住)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">18:30</td>
                    <td className="py-4 px-4 text-neutral-900">星空火鍋之夜</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">享受無光害星空，四人圍爐談心</td>
                  </tr>

                  {/* Day 2 */}
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-6 px-4 font-bold text-neutral-900 align-top" rowSpan={6}>Day 2<br/><span className="text-[10px] font-mono text-neutral-400 font-normal">水上漂浮</span></td>
                    <td className="py-6 px-4 font-mono text-neutral-500 align-top">08:30</td>
                    <td className="py-6 px-4 text-neutral-900">拔營前往日月潭</td>
                    <td className="py-6 px-4 text-neutral-500 text-xs italic">約 1.5 小時車程，沿途風景優美</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">10:00</td>
                    <td className="py-4 px-4 text-neutral-900 font-medium">日月潭 SUP 立槳</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs text-blue-600">預約上午團，光線最適合拍照</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">12:30</td>
                    <td className="py-4 px-4 text-neutral-900">蠻荒咖啡 午餐</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">純白玻璃屋 網美餐廳，建議提早線上候位</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">15:30</td>
                    <td className="py-4 px-4 text-neutral-900 font-medium">前往台中市區</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">入住草悟道或火車站周邊飯店</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">18:30</td>
                    <td className="py-4 px-4 text-neutral-900">PARK2 草悟系</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">都市裡的沙漠綠洲，逛逛文青選物店</td>
                  </tr>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">20:30</td>
                    <td className="py-4 px-4 text-neutral-900">Draft Land 微醺</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">體驗台中最Chill的立飲調酒文化</td>
                  </tr>

                  {/* Day 3 */}
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-6 px-4 font-bold text-neutral-900 align-top" rowSpan={5}>Day 3<br/><span className="text-[10px] font-mono text-neutral-400 font-normal">都會文青</span></td>
                    <td className="py-6 px-4 font-mono text-neutral-500 align-top">10:00</td>
                    <td className="py-6 px-4 text-neutral-900">台中綠美圖</td>
                    <td className="py-6 px-4 text-neutral-500 text-xs">2026 最新地標，純白建築外牆極好拍</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">12:00</td>
                    <td className="py-4 px-4 text-neutral-900">宮原眼科</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">在復古銀行吃豪華冰淇淋、選購伴手禮</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">14:30</td>
                    <td className="py-4 px-4 text-neutral-900">審計新村</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">逛暮暮市集，品嚐旅禾泡芙</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">18:00</td>
                    <td className="py-4 px-4 text-neutral-900 font-medium">台中精緻燒肉</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs italic">推薦：屋馬 或 茶六 (需一個月前預訂)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">20:00</td>
                    <td className="py-4 px-4 text-neutral-900">望高寮夜景</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">欣賞台中城市夜景，結束完美的一天</td>
                  </tr>

                  {/* Day 4 */}
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-6 px-4 font-bold text-neutral-900 align-top" rowSpan={5}>Day 4<br/><span className="text-[10px] font-mono text-neutral-400 font-normal">古蹟美食</span></td>
                    <td className="py-6 px-4 font-mono text-neutral-500 align-top">09:30</td>
                    <td className="py-6 px-4 text-neutral-900">前往彰化市區</td>
                    <td className="py-6 px-4 text-neutral-500 text-xs">約 30 分鐘車程</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">10:30</td>
                    <td className="py-4 px-4 text-neutral-900 font-medium">扇形車庫</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs font-mono">火車頭的夢幻旅館</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">12:00</td>
                    <td className="py-4 px-4 text-neutral-900 font-medium">彰化肉圓大戰</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs">推薦：阿三肉圓 (酥脆口感)</td>
                  </tr>
                  <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">14:00</td>
                    <td className="py-4 px-4 text-neutral-900">鹿港老街 漫遊</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs italic">走訪桂花巷藝術村、摸乳巷</td>
                  </tr>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-neutral-500">16:30</td>
                    <td className="py-4 px-4 text-neutral-900">帶著伴手禮賦歸</td>
                    <td className="py-4 px-4 text-neutral-500 text-xs italic">購買牛舌餅或玉珍齋餅舖後上路</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* Budget Breakdown */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { 
                  title: "交通組", 
                  amount: "500", 
                  desc: "2026年武嶺停車費、國道過路費與油資分攤。"
                },
                { 
                  title: "住宿組", 
                  amount: "1,500", 
                  desc: "台中設計感平價旅館/民宿，四人房更劃算。"
                },
                { 
                  title: "雜支組", 
                  amount: "200", 
                  desc: "買買伴手禮、扇形車庫週邊古早味點心。"
                },
                { 
                  title: "吃貨組", 
                  amount: "1,800", 
                  isDetailed: true,
                  details: [
                    { name: "宮原眼科", price: "260", desc: "必吃豪華聖代組" },
                    { name: "逢甲夜市", price: "500", desc: "吃遍巷頭巷尾" },
                    { name: "質感餐廳", desc: "慶祝友誼精緻正餐" }
                  ]
                }
              ].map((group, i) => (
                <div key={i} className="bg-white border border-neutral-200 p-6 shadow-sm hover:border-neutral-900 transition-all group">
                  <div className="flex justify-between items-baseline mb-4">
                    <h4 className="text-sm font-bold tracking-widest uppercase text-neutral-400 group-hover:text-neutral-900 transition-colors">{group.title}</h4>
                    <span className="text-xl font-display font-medium text-neutral-900">${group.amount || "Variable"}</span>
                  </div>
                  {group.isDetailed ? (
                    <div className="space-y-4">
                      {group.details?.map((d, di) => (
                        <div key={di} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-neutral-800">{d.name}</span>
                            {d.price && <span className="text-neutral-400 font-mono">${d.price}</span>}
                          </div>
                          <p className="text-[10px] text-neutral-400 font-light leading-tight">{d.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">{group.desc}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </section>

          {/* 3-Day Holiday Trip Section */}
          <section id="holiday">
            <SectionTitle subtitle="Holiday Trip">連假三日遊 / 3-Day Holiday</SectionTitle>
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-neutral-200 p-2 md:p-4 shadow-sm hover:border-neutral-900 transition-colors duration-500"
            >
              <div className="relative w-full aspect-video bg-neutral-100 overflow-hidden">
                <iframe 
                  src="https://drive.google.com/file/d/1Pwp52A7AvYvMfp6ajE1k9eZY5LVJlOXm/preview" 
                  className="absolute top-0 left-0 w-full h-full border-0" 
                  allow="autoplay" 
                  title="3-Day Holiday Trip Video"
                />
              </div>
              <div className="mt-4 px-4 pb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                  <Film className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">Duration</p>
                  <p className="text-sm font-medium">3 Days Experience Recap</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 3D Model Section */}
          <section id="model">
            <SectionTitle subtitle="Generative 3D">3D 模型 / 3D Model</SectionTitle>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-neutral-200 p-8 md:p-12 hover:border-neutral-900 transition-colors duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
                <div className="lg:w-1/3 space-y-6">
                  <h3 className="text-4xl font-display font-medium tracking-tight">數位重構</h3>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    利用現代 AI 工具與 3D 生成技術，將實體物件轉化為數位資產。這是我近期的一個實驗計畫，探索實體與虛擬的邊界。
                  </p>
                  <a 
                    href="https://studio.tripo3d.ai/workspace/generate/b0f739d3-1aa6-4f91-a66b-34aeedda7325" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-700 transition-colors"
                  >
                    進入導覽 / Explore Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <a 
                  href="https://studio.tripo3d.ai/workspace/generate/b0f739d3-1aa6-4f91-a66b-34aeedda7325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex gap-4 md:gap-8 justify-center group"
                >
                  <div className="relative w-48 h-64 md:w-64 md:h-80 overflow-hidden ring-1 ring-neutral-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1pw032iYMDgCRfL4CFyOxAFOkkyb7KK_f" 
                      alt="Reference" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-neutral-900 px-3 py-1 text-[10px] font-mono tracking-widest uppercase shadow-sm">REF_IMAGE</div>
                  </div>
                  <div className="relative w-48 h-64 md:w-64 md:h-80 overflow-hidden ring-1 ring-neutral-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl translate-y-8">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1bP0JF4LvaPV-CjRmA7f7-DDbOoObwbiK" 
                      alt="3D Result" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-4 left-4 bg-neutral-900 text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase shadow-sm">MODEL_3D</div>
                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-neutral-900 px-4 py-2 text-[10px] font-mono uppercase tracking-widest shadow-lg">
                        Click to Interact
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </section>

          {/* Presentation Section */}
          <section id="presentation">
            <SectionTitle subtitle="Research">專題簡報 / Presentation</SectionTitle>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-2 md:p-4 group"
            >
              <div className="relative w-full aspect-video border border-neutral-700 overflow-hidden">
                <iframe 
                  src="https://docs.google.com/presentation/d/1OavImZPnfJfunxWXcrQuCaOUeTSDPYb9AYH1qOehIyE/embed" 
                  className="absolute top-0 left-0 w-full h-full border-0 transition-all duration-700" 
                  allowFullScreen 
                  title="Slides"
                />
              </div>
            </motion.div>
          </section>

          {/* Autobiography Section */}
          <section id="about">
            <SectionTitle subtitle="Biography">自傳 / About</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4 sticky top-12"
                >
                  <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest">核心價值</p>
                  <ul className="space-y-2">
                    {["航海專業", "系統思考", "數位轉型", "紀律執行"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-900 font-medium">
                        <ChevronRight className="w-4 h-4 text-neutral-300" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:col-span-8 space-y-8 text-neutral-500 font-light leading-relaxed text-lg text-justify-base"
              >
                <p>
                  本人個性樂觀踏實，做事認真負責。目前就讀於國立高雄科技大學航海科，對於海洋事業充滿熱忱。在學期間，我不僅專研航海技術與規則，更積極探索數位化科技在海運產業的應用，從 3D 建模到自動化管理，皆是我持續關注並實踐的領域。
                </p>
                <p>
                  面對複雜多變的海况與產業環境，我深信「穩定」與「紀律」是成功的基石。未來的職場生涯中，我將以專業的航行知識為核心，結合創新的數位思維，為海運產業貢獻一己之力。
                </p>
                <div className="pt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center">
                    <Ship className="w-5 h-5 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900 uppercase tracking-widest">Lin Yu Cheng</p>
                    <p className="text-xs text-neutral-400 font-mono">CADET / NAVIGATION</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-48 pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-8 group">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.3em] font-medium">© 2026 Lin Yu Cheng.</span>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Privacy</a>
              <a href="#" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Terms</a>
            </div>
          </div>
          
          <motion.a 
            href="#"
            whileHover={{ y: -5 }}
            className="w-16 h-16 border border-neutral-200 rounded-full flex items-center justify-center group-hover:border-neutral-900 transition-all duration-500"
          >
            <ChevronRight className="w-5 h-5 -rotate-90 text-neutral-300 group-hover:text-neutral-900" />
          </motion.a>

          <div className="text-right hidden md:block">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">GET IN TOUCH</p>
            <a href="mailto:a111182149@nkust.edu.tw" className="text-sm font-medium hover:underline underline-offset-4">a111182149@nkust.edu.tw</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

