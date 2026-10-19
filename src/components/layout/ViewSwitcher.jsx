//receive view and function for changing it 
function ViewSwitcher({activeView, onViewChange}) {
    return(
        <nav className="view-switcher" aria-label="Main Navigation">
            <button 
                type="button"
                aria-pressed={activeView === 'dashboard'}
                onClick={() => onViewChange('dashboard')}
            >
                Dashboard
            </button>
            <button 
                type="button"
                aria-pressed={activeView === 'about'}
                onClick={() => onViewChange('about')}
            >
                About
            </button>
        </nav>
    );
}

export default ViewSwitcher;






