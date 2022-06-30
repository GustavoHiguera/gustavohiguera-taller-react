const Content= ({ courseInfo}) => (
      <div>
        {courseInfo.map(info => (
          <p key={info.key}> {info.part} {info.exercises}</p>
        ))}
      </div>
)

export default Content;