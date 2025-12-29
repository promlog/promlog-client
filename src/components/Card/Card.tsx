import { Label } from '../Label/Label';
import Badge from '../Badge/Badge';
import type { CardProps } from './Card.types';

const Card = ({ id, badges, view, date, writer, header, children }: CardProps) => {
  return (
    <article
      key={id}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all text-left group">
      <header className="flex items-center gap-2 mb-3 flex-wrap">
        {badges.map((badge) => (
          <Badge key={badge.id} size="sm" variant={badge.variant}>
            {badge.name}
          </Badge>
        ))}
      </header>
      <main>
        <h3 className="text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
          {header}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{children}</p>
      </main>
      <footer className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <Label.Text icon="view">{view}</Label.Text>
          <Label.Text icon="calendar">{date}</Label.Text>
        </div>
        <Label.Text>{writer}</Label.Text>
      </footer>
    </article>
  );
};

export default Card;
