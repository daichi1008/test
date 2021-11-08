const Navigation = ({ length, difficulty = 3, onChangeDifficulty }) => {
    const upVisibility = difficulty < 5 ? '' : 'is-hidden'
    const downVisibilitiy = difficulty > 1 ? '' : 'is-hidden'
    const onUpDifficulty = () => onChangeDifficulty(difficulty + 1)
    const onDownDifficulty = () => onChangeDifficulty(difficulty - 1)
    return (
        <div className="navigation">
            <div className="navigation-item">
                <span className="navigation-label">Length:</span>
                <div className="navigation-item-number-cotainer">
                    <div className="num-board">{length}</div>
                </div>
            </div>
            <div className="navigation-item">
                <span className="navigation-lable">Difficulty:</span>
                <div className="navigation-item-number-container">
                    <span className="num-board">{difficulty}</span>
                    <div className="difficulty-button-container">
                        <div
                            className={`difficulty-button difficulty-up${upVisibility}`}
                            onClick={onUpDifficulty}></div>
                        <div
                            className={`difficulty-button difficulty-down${downVisibilitiy}`}
                            onClick={onDownDifficulty}
                        ></div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Navigation;