import team from "../data/team"

export default function About() {
    return (
        <main>
            <div className="team">
                {team.map((member, index) => {
                    return (
                        <div key={index} className="team_member">
                            <img src={`/poesiaInfantil/${member.image}`} alt={member.name} />
                            <div className="team_member_info">
                                <h2>{member.image}</h2>
                                <h2>{member.name}</h2>
                                <h2>{member.name}</h2>
                                <h2>{member.name}</h2>
                                <h2>{member.name}</h2>
                                <h2>{member.name}</h2>
                                <h2>{member.name}</h2>
                                <p>{member.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </main>
    )
}
