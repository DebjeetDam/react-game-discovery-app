interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      onChange={(e) => onSelectCategory(e.target.value)}
      className="form-select"
    >
      <option value="">All categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utility">Utility</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;