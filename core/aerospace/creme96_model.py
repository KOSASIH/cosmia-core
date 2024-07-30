import numpy as np
from scipy.stats import poisson
from scipy.integrate import quad

class CREME96Model:
    def __init__(self, let_rate, junction_area, particle_energy, particle_flux):
        self.let_rate = let_rate
        self.junction_area = junction_area
        self.particle_energy = particle_energy
        self.particle_flux = particle_flux

    def calculate_see_rate(self):
        # Calculate the SEE rate using the CREME96 model
        def integrand(x):
            return self.particle_flux * self.junction_area * self.let_rate * np.exp(-x / self.particle_energy)
        see_rate, _ = quad(integrand, 0, np.inf)
        return see_rate

    def simulate_see(self, num_particles):
        # Simulate the SEE process using the CREME96 model
        see_events = np.random.poisson(self.calculate_see_rate(), num_particles)
        return see_events

    def calculate_see_cross_section(self):
        # Calculate the SEE cross section using the CREME96 model
        def integrand(x):
            return self.junction_area * self.let_rate * np.exp(-x / self.particle_energy)
        see_cross_section, _ = quad(integrand, 0, np.inf)
        return see_cross_section

    def plot_see_spectrum(self):
        # Plot the SEE spectrum using the CREME96 model
        energies = np.logspace(-3, 3, 100)
        see_rates = [self.calculate_see_rate(energy) for energy in energies]
        plt.loglog(energies, see_rates)
        plt.xlabel('Energy (MeV)')
        plt.ylabel('SEE Rate (events/s)')
        plt.title('SEE Spectrum using CREME96 Model')
        plt.show()

# Example usage:
creme96_model = CREME96Model(let_rate=1e-5, junction_area=1e-4, particle_energy=1, particle_flux=1e10)
see_rate = creme96_model.calculate_see_rate()
see_events = creme96_model.simulate_see(1000)
see_cross_section = creme96_model.calculate_see_cross_section()
creme96_model.plot_see_spectrum()
