import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";

const recentSessionsCompanions = [
  {
    id: "321",
    name: "Histora the Time Traveler",
    topic: "World History",
    subject: "history",
    duration: 40,
    color: "#FFD6E0",
    bookmarked: false,
  },
  {
    id: "654",
    name: "Bio the Life Explorer",
    topic: "Cell Biology",
    subject: "science",
    duration: 35,
    color: "#D6FFD6",
    bookmarked: false,
  },
];

const Page = async () => {


  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            <CompanionCard
                id="123"
                name="Neura the Brainy Explorer"
                topic="Neural Network of the Brain"
                subject="science"
                duration={45}
                color="#ffda6e"
                bookmarked={true}
            />
            <CompanionCard
                id="456"
                name="Countsy the Number Wizard"
                topic="Derivatives & Integrals"
                subject="maths"
                duration={30}
                color="#e5d0ff"
                bookmarked={true}
            />
            <CompanionCard
                id="789"
                name="Verba the Vocabulary Builder"
                topic="language"
                subject="English Literature"
                duration={30}
                color="#BDE7FF"
                bookmarked={true}
            />

        </section>

        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page