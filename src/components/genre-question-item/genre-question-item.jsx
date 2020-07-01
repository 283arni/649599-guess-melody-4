import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class GenreQuestionItem extends PureComponent {
  render() {
    const {answer, id, onChange, renderPlayer, gamerAnswers} = this.props;

    return (
      <div className="track">
        {renderPlayer(answer.src, id)}
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${id}`}
            id={`answer-${id}`}
            checked={gamerAnswers}
            onChange={(evt) => {
              const value = evt.target.checked;

              onChange(id, value);
            }}
          />
          <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
        </div>
      </div>
    );
  }
}

GenreQuestionItem.propTypes = {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  gamerAnswers: PropTypes.bool.isRequired,
};


export default GenreQuestionItem;
